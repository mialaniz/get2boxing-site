import { Product } from "../../sanity.types";
import { ProductGrid } from "./ProductGrid";

interface ProductsViewProps {
    products: Product[]
}

const ProductsView = ({products}: ProductsViewProps) => {
    return (

        <div>
            <div>
            
            </div>

            <div>
                <div>
                    <ProductGrid products={products}/>
                </div>
            </div>
        </div>

    )

}

export default ProductsView