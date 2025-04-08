'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { useCart } from "./Cart-Provider"
import { ShoppingCart, Check } from "lucide-react"
import { useCartAmount } from "@/app/lib/store";

export default function AddToCartButton({ product, boughtProduct }: { product: any, boughtProduct: any }) {
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const increaseTotalCartAmount = useCartAmount((state: any) => state.increaseCount);
  const increaseCount = useCartAmount((state: any) => state.increaseCount);
  const addItemToCart = useCartAmount((state: any) => state.addItemToCart);
  const removeItem = useCartAmount((state: any) => state.removeItem);

  const handleAddToCart = (price: any) => {
    addToCart({
      ...product,
      quantity,
    })

    setIsAdded(true)

    setTimeout(() => {
      setIsAdded(false)
    }, 2000)

    
    increaseTotalCartAmount(price);
    increaseCount();
    addItemToCart(product);
    removeItem(product);
    
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="flex w-32 items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-r-none"
            onClick={() => setQuantity(quantity - 1)}
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
            onClick={() => {
              console.log('boughtProduct', quantity);
              setQuantity(quantity+1);

            }}
          >
            +
          </Button>
        </div>

        <Button className="h-10 flex-1" onClick={() => handleAddToCart(boughtProduct * quantity)} disabled={isAdded}>
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

