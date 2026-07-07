import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
console.log(process.env.DATABASE_URL);  

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