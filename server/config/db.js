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

const isRemoteSSL = connectionString && (
  connectionString.includes('sslmode=require') || 
  connectionString.includes('neon.tech') ||
  connectionString.includes('supabase')
);

export const pool = connectionString
  ? new Pool({
      connectionString,
      ...(isRemoteSSL ? { ssl: { require: true, rejectUnauthorized: false } } : {})
    })
  : null;

export default async function connectdb() {
  if (!pool) {
    console.log('ℹ️ No DATABASE_URL set. Running in offline/mock mode for database.');
    return;
  }
  try {
    const client = await pool.connect();
    console.log('Database connected successfully');
    client.release();
  } catch (err) {
    console.warn('⚠️ Database connection warning:', err.message);
  }
}