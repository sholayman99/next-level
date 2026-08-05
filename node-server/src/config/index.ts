import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT ? Number(process.env.PORT) : 5000,
};

export default config;
