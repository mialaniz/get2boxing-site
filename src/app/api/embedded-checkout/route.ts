import {NextRequest, NextResponse} from 'next/server';
const stripePayment = require("stripe-payment")(process.env.STRIPE_PAYMENT);

export async function POST(req: NextRequest){
    try {
        const {amount} = await req.json();

        const paymentIntent = await stripePayment.paymentIntents.create({
            amount: amount,
            currency: "USD",
            automatic_payment_mentods: {enabled: true},
        })
    } catch(error) {
        console.error(error);
        return NextResponse.json({
            error: `Internal Server Error: ${error}`,
            status: 500,});
    }

}