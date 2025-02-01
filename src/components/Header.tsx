'use client'
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header(storeItem: any) {

  const [cartItems, setCartItems] = useState(0);
  
  const addItems = () => {
    setCartItems(cartItems + storeItem[1].price);
  }

    return (
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center bg-blue-600">
          <Link href="/" className="flex items-center">
            <Image src="/images/boxing-4.png" alt="Get2Boxing Logo" width={150} height={100} />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-secondary transition-colors text-blue-600">Home</Link></li>
              <li><Link href="/store" className="hover:text-secondary transition-colors text-blue-600">Store</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors text-blue-600">Contact</Link></li>
              <li><Link href="/cart" className="hover:text-secondary transition-colors text-blue-600">{(cartItems != 0) ? <ShoppingCartIcon/> : <ShoppingCartOutlinedIcon/>}</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
