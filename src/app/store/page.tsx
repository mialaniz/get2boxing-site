import Footer from "@/components/Footer";
import { Product } from "../../../sanity.types";
import ProductsView from "@/components/ProoductsView";
import { getAllProducts } from "../sanity/products/getAllProducts";




export default async function ShopPage(){

  const products = await getAllProducts();

  console.log(products)
  return (
    <div className="min-h-screen flex flex-col bg-yellow-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Shop</h1>
        <ProductsView products={products}/>
      </main>
      <Footer />
    </div>
  )
}

