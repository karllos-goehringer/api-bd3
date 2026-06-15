import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from '../config/database.config.ts';

const app = express();

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World com pnpm e Express!');
});

export default app;