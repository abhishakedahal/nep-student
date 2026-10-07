// Platform SDK: core-eventbus
import { Kafka, Producer, Consumer } from 'kafkajs';
import { Queue } from 'bullmq';

export interface EventEnvelope<T = unknown> {
  eventId: string;
  eventType: string;
  aggregateType: string;
  aggregateId: string;
  timestamp: string;
  correlationId?: string;
  version: number;
  payload: T;
}

export class KafkaEventBus {
  private kafka: Kafka;
  private producer: Producer | null = null;

  constructor(private clientId: string, private brokers: string[]) {
    this.kafka = new Kafka({
      clientId: this.clientId,
      brokers: this.brokers
    });
  }

  public async connectProducer(): Promise<Producer> {
    if (!this.producer) {
      this.producer = this.kafka.producer();
      await this.producer.connect();
    }
    return this.producer;
  }

  public async publish<T>(topic: string, event: EventEnvelope<T>): Promise<void> {
    const producer = await this.connectProducer();
    await producer.send({
      topic,
      messages: [
        {
          key: event.aggregateId,
          value: JSON.stringify(event),
          headers: {
            correlationId: event.correlationId || '',
            eventType: event.eventType
          }
        }
      ]
    });
  }

  public async createConsumer(groupId: string, topics: string[], onMessage: (event: EventEnvelope) => Promise<void>): Promise<Consumer> {
    const consumer = this.kafka.consumer({ groupId });
    await consumer.connect();
    for (const topic of topics) {
      await consumer.subscribe({ topic, fromBeginning: false });
    }
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        if (!message.value) return;
        const parsed = JSON.parse(message.value.toString()) as EventEnvelope;
        await onMessage(parsed);
      }
    });
    return consumer;
  }
}
