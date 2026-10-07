-- Microservices Database-per-Service Initialization
CREATE DATABASE identity_db;
CREATE DATABASE student_db;
CREATE DATABASE verification_db;
CREATE DATABASE campaign_offer_db;
CREATE DATABASE institution_db;
CREATE DATABASE business_db;
CREATE DATABASE redemption_db;
CREATE DATABASE notification_db;
CREATE DATABASE analytics_db;
CREATE DATABASE audit_db;

GRANT ALL PRIVILEGES ON DATABASE identity_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE student_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE verification_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE campaign_offer_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE institution_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE business_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE redemption_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE notification_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE analytics_db TO nepstudent;
GRANT ALL PRIVILEGES ON DATABASE audit_db TO nepstudent;
