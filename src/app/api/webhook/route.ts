import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {

    const payload = await req.text();
    //const response = JSON.parse(payload); //parse the response

    const sig = req.headers.get("Stripe-Signature");
    try {
        const event = stripe.webhooks.constructEvent(payload, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
        //console.log("event: ", event.type);

        return NextResponse.json({status: "success", event: event.type});

    } catch(error) {
        console.error(error);
    }


}