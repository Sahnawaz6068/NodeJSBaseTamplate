import dotenv from 'dotenv';

dotenv.config();

export default{
    PORT:process.env.PORT,
    DB_URL:process.env.DATABASE_URL,
    JWT_EXPIRY:process.env.JWT_EXPIRY,
    JWT_SECRET:process.env.JWT_SECRET
}