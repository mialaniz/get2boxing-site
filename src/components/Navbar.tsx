"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import {MapPin, Menu} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image';
import LoadingSpin from './LoadingSpin';

export default function Navbar() {

  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [loading]);

  const handleNavClick = () => {
    setLoading(true)
    setMobileMenuOpen(false) // Close mobile menu when navigating
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center sm:px-1 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center"
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
        <div className="flex-1 flex justify-center">
          
          <nav className="hidden md:flex md:pl-32 gap-72 items-center justify-center">
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

          </nav>
        </div>
    
        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden border-secondary text-secondary hover:bg-secondary/10">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                  href="/locations"
                  className="flex items-center text-lg font-medium text-muted-foreground hover:text-secondary p-2 rounded-md hover:bg-secondary/10 transition-colors"
                  onClick={handleNavClick}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Locations
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

      <LoadingSpin isLoading={loading}></LoadingSpin>
    </div>
    </header>
  
  )
}
