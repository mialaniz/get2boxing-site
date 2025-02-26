import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

export async function POST(req: NextRequest, res: NextResponse) {

    const payload = await req.text();
    const response = JSON.parse(payload); //parse the response

    const sig = req.headers.get("Stripe-Signature");
    try {
        let event = stripe.webhooks.constructEvent(payload, sig!, process.env.NEXT_PUBLIC_STRIPE_WEBHOOKS!);
        console.log("event: ", event.type);

        return NextResponse.json({status: "success", event: event.type});

    } catch(error) {
        console.error(error);
    }


}