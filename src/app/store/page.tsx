'use client'

import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link"
import {Box, Container, Grid, Heading, Section, Text} from "@radix-ui/themes";
import Image from "next/image";
import Header from "@/components/Header";
import { ProductGrid } from "./ProductGrid";
import Footer from "@/components/Footer";
import { Product } from "../../../sanity.types";


interface ProductsViewProps {
  products: Product[];
}


const ShopPage = ({products} : ProductsViewProps) => {

  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Shop</h1>
        <ProductGrid products={products}/>
      </main>
      <Footer />
    </div>
  )
}

export default ShopPage;
