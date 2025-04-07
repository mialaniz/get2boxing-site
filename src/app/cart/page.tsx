import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { getAllProducts } from "../sanity/products/getAllProducts"


// Sample cart items - in a real app, this would come from a cart context or API
const cartItems = [
  {
    id: 1,
    name: "PRO BOXING GLOVES",
    category: "Training Gloves",
    price: "89.99",
    color: "Black",
    size: "Medium (14oz)",
    quantity: 1,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    name: "TRAINING PADS",
    category: "Training Equipment",
    price: "59.99",
    color: "Red/Black",
    size: "Standard",
    quantity: 1,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default async function CheckoutPage() {
  // Calculate order summary
  const subtotal = cartItems.reduce((sum, item) => sum + Number.parseFloat(item.price) * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax


  const {products} = await getAllProducts(); 

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
                <CardDescription>{cartItems.length} items in your cart</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-4 border-b">
                    <div className="relative aspect-square sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover" fill />
                    </div>
                    <div className="flex-grow space-y-1">
                      <h3 className="font-bold impact-text">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <span>Color: {item.color}</span>
                        <span>Size: {item.size}</span>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-4">
                      <div className="text-lg font-bold">${item.price}</div>
                      <div className="flex items-center">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <div className="h-8 w-8 flex items-center justify-center border-y">{item.quantity}</div>
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
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="promoCode">Promo Code</Label>
                  <div className="flex space-x-2">
                    <Input id="promoCode" placeholder="Enter code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-black varsity-border h-12 text-lg mt-4">
                  Complete Order
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-2">
                  By completing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 items-center text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-8 w-12 bg-muted rounded"></div>
                  <div className="h-8 w-12 bg-muted rounded"></div>
                  <div className="h-8 w-12 bg-muted rounded"></div>
                  <div className="h-8 w-12 bg-muted rounded"></div>
                </div>
                <p className="text-xs text-muted-foreground">Secure payment processing. Your data is protected.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

