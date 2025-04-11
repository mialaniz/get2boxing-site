import ProductsView from "@/components/ProoductsView";
import { getAllProducts } from "../sanity/products/getAllProducts";

export default async function ShopPage(){

  const products = await getAllProducts();

  console.log("Here are the products: ", products);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-yellow-500 mb-8">Shop</h1>
        <ProductsView products={products}/>
      </main>
    </div>
  )
}

