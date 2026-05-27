import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import connectdb from './config/db.js'; 

import ContactSubmission from './models/ContactSubmission.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '.env') })

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors({ origin: true }))
app.use(express.json({ limit: '64kb' }))

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {}

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid payload' })
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  }

  if (!trimmed.name || !trimmed.email || !trimmed.message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    await ContactSubmission.create(trimmed)
    return res.status(201).json({ ok: true })
  } catch (err) {
    console.error('Contact save error:', err)
    return res.status(500).json({ error: 'Could not save message' })
  }
})

try {
  await connectdb()
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`)
  })
} catch (err) {
  console.error('Failed to start server:', err)
  process.exit(1)
}
