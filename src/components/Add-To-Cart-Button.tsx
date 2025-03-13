"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { useCart } from "./Cart-Provider"
import { ShoppingCart, Check } from "lucide-react"


export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })

    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="flex w-32 items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-r-none"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
            className="h-10 w-14 rounded-none border-x-0 text-center"
          />
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-l-none"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>

        <Button className="h-10 flex-1" onClick={handleAddToCart} disabled={isAdded}>
          {isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>

      <Button variant="outline" className="w-full">
        Buy Now
      </Button>
    </div>
  )
}

