import { Product } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import Link from "next/link";
import Image from "next/image";

export const ProductThumb = ({product}: {product: Product}) => {

    console.log(product.name)
    return (

        <Link
            href={`/product/${product.slug?.current}`}
            className="group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
        >
            <div className="relative aspect-square w-full h-full overflow-hidden">
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
            <div className="p-4 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {product.name}
                </h2>

                <p className="mt-2 text-lg font-bold text-gray-900">
                    ${product.price?.toFixed(2)}
                </p>
            </div>
        </Link>
    );
}