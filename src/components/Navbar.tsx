"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link"
import {MapPin, Phone, ShoppingBag, ShoppingCart} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import LoadingSpin from './LoadingSpin';

export default function Navbar() {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Set back to false after 3 seconds

      // Clear the timer if the component unmounts or the boolean changes before the timer finishes
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2"
          onClick={() =>{
            setLoading(true);
          }}>
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
              onClick={() =>{
                setLoading(true);
              }}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Store
            </Link>
            <Link
              href="/locations"
              className="flex items-center text-lg font-medium text-muted-foreground hover:text-secondary"
              onClick={() =>{
                setLoading(true);
              }}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Locations
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-lg font-medium text-muted-foreground hover:text-secondary"
              onClick={() =>{
                setLoading(true);
              }}
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
        onClick={() =>{
          setLoading(true);
        }}
      >
        <ShoppingCart className="h-5 w-5"/>

      </Link>

      <LoadingSpin isLoading={loading}></LoadingSpin>
    </div>
    </header>
  
  )
}
