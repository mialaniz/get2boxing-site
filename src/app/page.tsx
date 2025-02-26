import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-right"></div>
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 relative">
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter varsity-shadow"
                style={{ fontFamily: "var(--font-graduate)" }}
              >
                TRAIN LIKE A
                <br />
                <span className="text-primary">CHAMPION</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our state-of-the-art boxing facilities and train with professional coaches. Start your boxing
                journey today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto bg-secondary hover:bg-secondary/90 text-black varsity-border"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full min-[400px]:w-auto border-primary text-primary hover:bg-primary/10"
                >
                  View Locations
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 -rotate-6 rounded-xl"></div>
                <Image
                  alt="Boxing Training"
                  className="relative rounded-xl object-cover"
                  height="500"
                  src="/placeholder.svg?height=500&width=800"
                  width="800"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-t py-12 md:py-24 lg:py-32 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter text-center mb-12 varsity-shadow"
              style={{ fontFamily: "var(--font-graduate)" }}
            >
              WHY CHOOSE US
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4 relative">
                <div className="inline-block rounded-lg bg-secondary p-3 varsity-border">
                  <ShoppingBag className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-graduate)" }}>
                  Premium Equipment
                </h3>
                <p className="text-muted-foreground">
                  Access to top-quality boxing equipment and gear. Train with the best to become the best.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary p-3 varsity-border">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-graduate)" }}>
                  Multiple Locations
                </h3>
                <p className="text-muted-foreground">
                  Convenient locations across the city. Find a gym that's close to you and start training.
                </p>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary p-3 varsity-border">
                  <Star className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-graduate)" }}>
                  Expert Coaching
                </h3>
                <p className="text-muted-foreground">
                  Learn from experienced trainers who are passionate about helping you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-t py-12 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 space-x-2">
                <h2
                  className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white varsity-shadow"
                  style={{ fontFamily: "var(--font-graduate)" }}
                >
                  READY TO START YOUR JOURNEY?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join Get2Boxing today and transform your fitness journey with expert coaching and premium facilities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto bg-secondary hover:bg-secondary/90 text-black varsity-border"
                >
                  Join Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full min-[400px]:w-auto border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-gray-500">© 2024 Get2Boxing. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

