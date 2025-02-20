import React, {FormEvent, useState} from 'react'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { Button } from '@radix-ui/themes'
import Image from 'next/image'

interface Product {
    id: number
    name: string
    price: number
    image: string
}

export default function ProductCard({product}: {product: Product}) {
  
    const [total, setTotal] = useState(0);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Added ${product.name} to cart. New total: ${total + product.price}`); // Log the new total
    }

    const handleAddToCart = () => {
        setTotal(total + product.price); // Update the total value
        
    };

    return (
        <div className="bg-white rounded-lg shadow-md">
            <AspectRatio.Root ratio={1}>
                <Image
                    src={product.image}
                    alt={product.name}
                />
            </AspectRatio.Root>
            <form onSubmit={handleSubmit}>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>
                    <p className="text-yellow-600 font-bold mt-2">${product.price.toFixed(2)}</p>
                    <Button
                        className="rounded-md w-full mt-4 bg-blue-600 text-yellow-300 hover:bg-blue-700"
                        onClick={handleAddToCart} // Use onClick instead of onChange
                    >
                        Add to Cart
                    </Button>
                </div>

                
            </form>
        </div>
  )
}
