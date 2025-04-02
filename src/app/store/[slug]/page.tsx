import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/app/sanity/products/getProductBySlug";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AddToCartWrapper from "@/components/wrappers/Add-To-Cart-Wrapper";
import { imageUrl } from "@/app/sanity/lib/imageUrl";
import { PortableText } from "@portabletext/react"; // Import PortableText

async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  console.log("Slug: ", slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/store"
        className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Store
      </Link>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
            <div className="mb-4 flex items-center">
              <div className="flex items-center">
                {/* Add your rating component here */}
              </div>
            </div>
            <p className="text-2xl font-bold">${product.price}</p>
          </div>

          <div className="mb-6">
            {/* Use PortableText to render the description */}
            <PortableText value={product.description} />
          </div>

          <div className="mt-auto">
            <AddToCartWrapper product={product} boughtPrice={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;