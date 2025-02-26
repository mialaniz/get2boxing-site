import React from 'react';
import Link from "next/link"
import {MapPin, Phone, ShoppingBag} from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Navbar() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-graduate)" }}>
              GET2<span className="text-secondary">BOXING</span>
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex justify-center items-center w-full">
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
         
          <Button variant="outline" className="md:hidden border-secondary text-secondary hover:bg-secondary/10">
            Menu
          </Button>
        </div>
      </header>
  )
}
