import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { SanityClient } from "next-sanity";

export const getAllProducts = async () => {

    const get_all_products = defineQuery(`
        *[
            _type == "product"
        ] | order(name asc)
    `);

    try {
        const products = await sanityFetch({
            query: get_all_products,
        });
        
        return products.data || [];

    } catch(error) {
        console.error("Could not get products.")
        return [];
    }


}