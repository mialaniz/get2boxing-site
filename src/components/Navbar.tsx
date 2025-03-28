import React from 'react';
import Link from "next/link"
import {MapPin, Phone, ShoppingBag, ShoppingCart} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import useBasketStore from '@/app/sanity/lib/store';


export default function Navbar() {
  
 
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            alt="Boxing Training"
            className="relative rounded-xl object-cover"
            height="300"
            src="/images/boxing-4.png?height=500&width=800"
            width="200"
          />
        </Link>
    
        {/* Centered Navigation */}
        <div className="flex-1 flex justify-center md:pl-44">
          
          <nav className="hidden md:flex gap-28 items-center">
            <Link
              href="/store"
              className="flex items-center text-lg font-medium text-muted-foreground hover:text-secondary"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Store
            </Link>
            <Link
              href="/locations"
              className="flex items-center text-lg font-medium text-muted-foreground hover:text-secondary"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Locations
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-lg font-medium text-muted-foreground hover:text-secondary"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </nav>
        </div>
    
        {/* Mobile Menu Button */}
        <Button variant="outline" className="md:hidden border-secondary text-secondary hover:bg-secondary/10">
          Menu
        </Button>
    
            
      <Link
        href="/cart"
        className="flex item-center text-lg font-medium text-muted-foreground hover:text-secondary"  
      >
        <ShoppingCart className="h-4 w-4"/>

      </Link>


      </div>
    </header>
  
  )
}
