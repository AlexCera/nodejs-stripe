import { Stripe } from 'stripe';
import { STRIPE_API_KEY } from '../config/app.js';

const stripe = new Stripe(`${STRIPE_API_KEY}`)

export const createSession = async (req, res) => {
    const { body } = req

    if (body.products.length > 0) {
        const CURRENCY = 'cop';
        const itemsToProcess = []
        const { products } = body

        products.map(product => {
            itemsToProcess.push({
                price_data: {
                    product_data: {
                        name: product.name,
                        description: 'NO APLICA'
                    },
                    currency: CURRENCY,
                    unit_amount: product.price * 100
                },
                quantity: product.quantity
            })
        })

        const session = await stripe.checkout.sessions.create({
            line_items: itemsToProcess,
            mode: 'payment',
            success_url: 'http://localhost:3000/response.html?res=true',
            cancel_url: 'http://localhost:3000/response.html?res=false'
        })

        return res.json(session);
    }

    return res.status(400).json({ message: "No hemos recibido los productos para procesar la compra." });
}