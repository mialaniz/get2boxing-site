import { client } from "@/app/sanity/lib/client";

export const getAllProducts = async () => {
    try {
        const products = await client.fetch(`
            *[_type == "product"] | order(name asc)
        `);
        
        return products || [];
    } catch (error) {
        console.error("Could not get products:", error);
        return [];
    }
};