import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export async function POST(req: NextRequest) {

    const payload = await req.text();
    //const response = JSON.parse(payload); //parse the response

    const sig = req.headers.get("Stripe-Signature");
    try {
        const event = stripe.webhooks.constructEvent(payload, sig!, process.env.NEXT_PUBLIC_STRIPE_WEBHOOKS!);
        //console.log("event: ", event.type);

        return NextResponse.json({status: "success", event: event.type});

    } catch(error) {
        console.error(error);
    }


}