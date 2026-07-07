import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const { Pool } = pg;

// Resolve the path to server/.env relative to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  connectionString,
  ssl: { 
    require: true, 
    rejectUnauthorized: false 
  }
});

export default async function connectdb() {
  const client = await pool.connect();
  console.log('Database connected successfully to Neon PostgreSQL');
  client.release();
}