import express, { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";
import * as path from 'path';

const router = Router();

router.post('/create-checkout-session', createSession);

export default router;