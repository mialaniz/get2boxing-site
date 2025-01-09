'use client'

import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link"
import {Box, Container, Grid, Heading, Section, Text} from "@radix-ui/themes";
import Image from "next/image";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";


const stripePromise = loadStripe(process.env.NEXT_STRIPE_PRIVATE_KEY)

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Shop</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}
