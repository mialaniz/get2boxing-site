import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getAllProducts } from "../sanity/products/getAllProducts"
import { imageUrl } from "@/app/sanity/lib/imageUrl";


// Sample cart items - in a real app, this would come from a cart context or API


export default async function CheckoutPage() {
  // Calculate order summary
  const products = await getAllProducts();
  console.log("Here are the products from the checkout page: ", products);


  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 py-8">
        <Link href="/store" className="flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight impact-text mb-8">
          CHECK<span className="text-primary">OUT</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl impact-text flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  YOUR CART
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {products.map((product: any) => (
                  <div key={product._id} className="flex flex-col sm:flex-row gap-4 pb-4 border-b">
                    <div className="relative aspect-square sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <Image 
                        src={product.image ? imageUrl(product.image).url() : '/placeholder-image.jpg'}
                        alt={product.name || "Product Image"}
                        className="object-cover" 
                        fill 
                        />
                    </div>
                    <div className="flex-grow space-y-1">
                      <h3 className="font-bold impact-text">{product.name}</h3>
                      
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-4">
                      <div className="text-lg font-bold">${product.price}</div>
                      <div className="flex items-center">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Update Cart</Button>
                <Button variant="ghost" className="text-muted-foreground">
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Order Summary - Takes up 1 column on large screens */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-2xl impact-text">ORDER SUMMARY</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$ </span>
                  </div>
                  
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>$</span>
                  </div>
                </div>

                

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-black varsity-border h-12 text-lg mt-4">
                  Complete Order
                </Button>

                
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 items-center text-center">
                
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

