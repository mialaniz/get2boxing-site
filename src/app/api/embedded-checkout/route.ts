import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
    try{ 
        


    } catch (error: any){
        console.error(error)
        return NextResponse.json({message: error.message}, {status: 500})
    }
}