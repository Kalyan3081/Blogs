import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { mongoDB_connection } from './connection.js';
import AuthRoutes from './routes/AuthRoutes.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

mongoDB_connection()

app.use('/auth', AuthRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})