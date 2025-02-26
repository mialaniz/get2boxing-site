"use client"

import { Product } from "../../sanity.types";
import { ProductThumb } from "./ProductThumb";
import { imageUrl } from "@/lib/imageUrl";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



export const ProductGrid = ({products}:{products: Product[]}) => {
    return(
        <main>
        <div className="flex min-h-screen flex-col">
        <div className="relative">
        <div className="absolute inset-0 bg-primary/5 -skew-y-6 transform origin-top-right"></div>
        <div className="relative container px-4 py-8 md:py-12">
          <div className="space-y-2 text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight varsity-shadow impact-text">
              BOXING <span className="text-primary">EQUIPMENT</span>
            </h1>
            <p className="text-gray-500 md:text-xl">Premium gear for champions. Train with the best equipment.</p>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card className="group relative overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden">
                {product.image && (
                  <Image
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    src={imageUrl(product.image).url()}
                    alt={product.name || "Product Image"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                
            )}
            </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl impact-text mb-1">{product.name}</CardTitle>
                  </div>
                </div>
                <p className="mt-2 text-lg font-bold">${product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
        </main>
    );
};