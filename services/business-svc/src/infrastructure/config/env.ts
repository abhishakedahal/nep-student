// Infrastructure: Environment Config
export const env = {
  PORT: process.env.PORT || 5005,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://nepstudent:nepstudent_dev@localhost:5432/business_db?schema=public',
  KAFKA_BROKERS: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
  NODE_ENV: process.env.NODE_ENV || 'development'
};
