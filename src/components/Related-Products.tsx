"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import { Star, ShoppingCart } from "lucide-react"
import { getRelatedProducts } from "@/lib/products"

export default function RelatedProducts({
  currentProductId,
  category,
}: { currentProductId: string; category: string }) {
  const { addToCart } = useCart()
  const products = getRelatedProducts(currentProductId, category)

  if (products.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold">Related Products</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <Link href={`/store/${product.slug}`}>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {product.isNew && (
                  <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                    New
                  </div>
                )}
                {product.discount > 0 && (
                  <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                    {product.discount}% Off
                  </div>
                )}
              </div>
            </Link>

            <CardContent className="p-4">
              <Link href={`/store/${product.slug}`}>
                <h3 className="mb-1 line-clamp-1 font-medium hover:underline">{product.name}</h3>
              </Link>
              <div className="mb-2 flex items-center">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                </div>
                <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button variant="outline" className="w-full" onClick={() => addToCart(product)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

