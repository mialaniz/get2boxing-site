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

  const cartItemTotal = useCartAmount((state:any) => state.cartItemTotal);
  const increaseTotalCartAmount = useCartAmount((state: any) => state.increaseCount);
  const increaseCount = useCartAmount((state: any) => state.increaseCount);
  const addItemToCart = useCartAmount((state: any) => state.addItemToCart);
  const removeItem = useCartAmount((state: any) => state.removeItem);

  const handleAddToCart = () => {
    const totalPrice = product.price * quantity;
  
    addToCart({
      ...product,
      quantity,
    });
  
    //put this in cart amount
    increaseTotalCartAmount(totalPrice);
    increaseCount();
    addItemToCart(product);
  
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  
    console.log("Cart total log:", totalPrice);
  };

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

