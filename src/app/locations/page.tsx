"use client"

import { useState,useCallback } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'




export default function LocationsPage() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
        {/* Hero Section - Now perfectly centered */}
        <div className="relative w-full">
            <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-left"></div>
            <div className="relative container px-4 md:mx-auto py-8 md:py-12">
            <div className="space-y-2 text-center">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight varsity-shadow impact-text mx-auto max-w-4xl">
                OUR <span className="text-primary">LOCATIONS</span>
                </h1>
                <p className="text-gray-500 md:text-xl mx-auto max-w-2xl">
                Find a Get2Boxing gym near you and start your training journey.
                </p>
            </div>
            </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 container px-4 py-8 md:py-16 flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap lg:gap-16 items-center max-w-7xl w-full">
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
                    Our flagship location with state-of-the-art facilities
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                        1234 Pacific Coast Highway
                        <br />
                        Oceanside, CA 92054
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary mt-1 mx-auto md:mx-0">
                        Get Directions
                    </Button>
                    </div>

                    <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">(760) 555-1234</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">oceanside@get2boxing.com</span>
                        </div>
                    </div>
                    </div>

                    <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2">Hours of Operation</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm max-w-xs mx-auto md:mx-0">
                        <div className="text-right font-medium">Monday - Friday</div>
                        <div>5:00 AM - 10:00 PM</div>
                        <div className="text-right font-medium">Saturday</div>
                        <div>7:00 AM - 8:00 PM</div>
                        <div className="text-right font-medium">Sunday</div>
                        <div>8:00 AM - 6:00 PM</div>
                    </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-4">
                    <Button variant="outline">Contact Us</Button>
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
                        "3 Boxing Rings",
                        "20+ Heavy Bags",
                        "Speed Bag Area",
                        "Cardio Equipment",
                        "Strength Training",
                        "Locker Rooms",
                        "Pro Shop",
                        "Showers"
                    ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-secondary"></div>
                        <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                {/* Events Card */}
                <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl impact-text text-center md:text-left">UPCOMING EVENTS</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-center md:text-left">
                    <div>
                    <h3 className="font-semibold">Beginner Boxing Workshop</h3>
                    <p className="text-sm text-muted-foreground">Saturday, April 15, 2024 • 10:00 AM - 12:00 PM</p>
                    <p className="text-sm mt-1">Learn the fundamentals of boxing in this beginner-friendly workshop.</p>
                    </div>
                    <div>
                    <h3 className="font-semibold">Amateur Boxing Showcase</h3>
                    <p className="text-sm text-muted-foreground">Friday, April 28, 2024 • 6:00 PM - 9:00 PM</p>
                    <p className="text-sm mt-1">Watch our talented boxers compete in this exciting showcase event.</p>
                    </div>
                </CardContent>
                </Card>
            </div>

            {/* Right Column: Map/Images */}
            <div className="space-y-8">
                

                {/* Image Tabs */}
                <Tabs defaultValue="exterior">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="exterior">Exterior</TabsTrigger>
                    <TabsTrigger value="training">Training Area</TabsTrigger>
                    <TabsTrigger value="rings">Boxing Rings</TabsTrigger>
                </TabsList>
                <TabsContent value="exterior" className="mt-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=400&width=700"
                        alt="Exterior of Get2Boxing Oceanside"
                        className="object-cover"
                        fill
                    />
                    </div>
                </TabsContent>
                <TabsContent value="training" className="mt-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=400&width=700"
                        alt="Training area with heavy bags"
                        className="object-cover"
                        fill
                    />
                    </div>
                </TabsContent>
                <TabsContent value="rings" className="mt-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                        src="/placeholder.svg?height=400&width=700"
                        alt="Professional boxing rings"
                        className="object-cover"
                        fill
                    />
                    </div>
                </TabsContent>
                </Tabs>

                {/* Coaches Card */}
                <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl impact-text text-center">OUR COACHES</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                    {[
                        { name: "Mike Rodriguez", role: "Head Coach" },
                        { name: "Sarah Johnson", role: "Fitness Coach" }
                    ].map((coach) => (
                        <div key={coach.name} className="text-center">
                        <div className="relative aspect-square rounded-full overflow-hidden mx-auto w-24 mb-2">
                            <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt={`Coach ${coach.name.split(" ")[0]}`}
                            className="object-cover"
                            fill
                            />
                        </div>
                        <h3 className="font-semibold">{coach.name}</h3>
                        <p className="text-sm text-muted-foreground">{coach.role}</p>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex-1 max-w-md bg-secondary hover:bg-secondary/90 text-black varsity-border">
                    Join Now
                </Button>
                <Button variant="outline" className="flex-1 max-w-md">
                    Schedule a Class
                </Button>
                </div>
            </div>
            </div>
        </main>

        {/* CTA Section */}
        <section className="w-full border-t py-12 md:py-16 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
            <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tight text-white varsity-shadow impact-text">
                    READY TO START YOUR JOURNEY?
                </h2>
                <p className="mx-auto max-w-[600px] text-white/80 md:text-xl/relaxed">
                    Join Get2Boxing today and transform your fitness with expert coaching at our Oceanside location.
                </p>
                </div>
                <Button className="bg-white text-black hover:bg-white/90">
                Book a Free Trial
                </Button>
            </div>
            </div>
        </section>
        </div>
    )
}