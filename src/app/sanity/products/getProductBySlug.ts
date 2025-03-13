import { client } from "@/app/sanity/lib/client";

export const getProductBySlug = async (slug: string) => {
    try {
        const product = await client.fetch(`
            *[_type == "product" && slug.current == $slug] | order(name asc) [0]
        `, { slug });


        
        return product || null;
    } catch (error) {
        console.error("Error fetching product by slug:", error);
        return null;
    }
};