"use client"

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LocationsPage() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
        {/* Hero Section - Now perfectly centered */}
        <div className="relative w-full">
            <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
            <div className="relative container px-4 md:mx-auto py-8 md:py-12">
                <div className="space-y-2 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight varsity-shadow impact-text mx-auto max-w-4xl">
                    OUR <span className="text-primary">LOCATION</span>
                    </h1>
                    <p className="text-gray-500 md:text-xl mx-auto max-w-2xl">
                    Find a Get2Boxing gym near you and start your training journey.
                    </p>
                </div>
            </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 container px-4 py-8 md:py-16 flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start max-w-7xl w-full">
                {/* Left Column: Location Details */}
                <div className="space-y-8">
                    {/* Location Card */}
                    <Card className="w-full">
                    <CardHeader className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                        <MapPin className="h-5 w-5 text-primary" />
                        <CardTitle className="text-2xl impact-text">OCEANSIDE, CA</CardTitle>
                        </div>
                        <CardDescription className="text-center md:text-left">
                        Our flagship location
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-muted-foreground">
                            3365 Mission Ave Suite F
                            <br />
                            Oceanside, CA 92058
                        </p>
                        
                        </div>

                        <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">(760) 500-5220</span>
                            </div>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                            </div>
                        </div>
                        </div>
                        
                    </CardContent>
                    </Card>

                    {/* Facility Features Card */}
                    <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-xl impact-text text-center md:text-left">FACILITY FEATURES</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0">
                        {[
                            "Boxing Ring",
                            "8 Heavy Bags",
                            "Cardio Equipment",
                            "Strength Training",
                            "Lockers",
                        ].map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-secondary"></div>
                            <span>{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                    </Card>            
                </div>

                {/* Right Column: Images */}
                <div className="space-y-8">
                    {/* Image Tabs */}
                    <Card className="w-full">
                    <CardContent className="pt-6">
                        <Tabs defaultValue="exterior">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="exterior">Exterior</TabsTrigger>
                            <TabsTrigger value="training">Training Area</TabsTrigger>
                            <TabsTrigger value="rings">Boxing Ring</TabsTrigger>
                        </TabsList>
                        <TabsContent value="exterior" className="mt-4">
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                    src="/images/DSCF2501.JPG?height=400&width=700"
                                    alt="Exterior of Get2Boxing Oceanside"
                                    className="object-cover"
                                    fill
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="training" className="mt-4">
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/images/DSCF2494.JPG?height=400&width=700"
                                alt="Training area with heavy bags"
                                className="object-cover"
                                fill
                            />
                            </div>
                        </TabsContent>
                        <TabsContent value="rings" className="mt-4">
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                src="/images/DSCF2491.JPG?height=400&width=700"
                                alt="Professional boxing ring"
                                className="object-cover"
                                fill
                            />
                            </div>
                        </TabsContent>
                        </Tabs>
                    </CardContent>
                    </Card>
                </div>
            </div>
        </main>

        {/* CTA Section - Perfectly Centered */}
        <section className="w-full border-t py-12 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>

  {/* Centered Container */}
  <div className="container px-4 md:px-6 mx-auto relative">
    <div className="flex flex-col items-center justify-center space-y-6 text-center"> 
      
      {/* Title & Description */}
      <div className="space-y-2"> 
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

      
      
    </div>
  </div>

  
</section>

            <footer className="w-full border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                    <p className="text-sm text-gray-500">© 2024 Get2Boxing. All rights reserved.</p>
                </div>
            </footer>
        </div>

        
    )
}