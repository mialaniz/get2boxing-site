import AddToCartButton from "../Add-To-Cart-Button";
import { getAllProducts } from "@/app/sanity/products/getAllProducts";

export default async function AddToCartWrapper({product} : {product: any}) {
    
    const boughtProduct = getAllProducts();

    return (
        <AddToCartButton product={product} boughtProduct={boughtProduct}/>
    )

}