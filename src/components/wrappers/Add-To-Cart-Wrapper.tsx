import AddToCartButton from "../Add-To-Cart-Button";

export default async function AddToCartWrapper({product, boughtPrice} : {product: any, boughtPrice: number}) {
    
    return (
        <AddToCartButton product={product} boughtProduct={boughtPrice}/>
    )

}