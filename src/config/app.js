import * as dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT
export const STRIPE_API_KEY = process.env.STRIPE_API_KEY