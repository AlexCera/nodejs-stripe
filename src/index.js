import express from 'express';
import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config/app.js';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.static(path.resolve('src/public')))
app.use(paymentRoutes);
app.listen(PORT)

console.log(`STRIPE API RUNNING ON PORT ${PORT}`);