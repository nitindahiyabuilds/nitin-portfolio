import mongoose from 'mongoose'

export default async function connectdb() {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set. Add it in server/.env')
  }

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: 'Portfolio-site',
  })

  console.log('Database is connected')
}
