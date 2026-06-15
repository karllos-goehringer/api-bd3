import mongoose from 'mongoose';

//Conexão com o mongoDB
export async function connectDB() {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
    console.log('MongoDB connected successfully via pnpm!');
  } catch (error) {
    console.error('Connection error:', error);
  }
}