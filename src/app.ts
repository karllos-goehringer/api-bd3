import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from '../config/database.config.ts';
import mainRouter from './routes.ts';

const app = express();

app.use(express.json());
connectDB();

app.use('/api', mainRouter);

export default app;