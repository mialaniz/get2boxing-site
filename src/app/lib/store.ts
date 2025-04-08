import {create} from "zustand"
import { Product } from "../../../sanity.types";

export const useCartAmount = create((set) => ({
    
    storeItem: [],
    itemCount: 0,
    
    //this is the amount we will pipe into stripe API.
    cartTotalAmount: 0,
    addItemToCart: (item: any) => set((state: any) => ({
        storeItem: [...state.storeItem, item]
    })),
    
    removeItem: (id: any) => set((state: any) => ({
        storeItems: state.items.filter((item: any) => item.id !== id)
    })),

    increaseTotalCartAmount: (productPrice: any) => set((state: {cartTotalAmount: number}) => 
        ({cartTotalAmount: state.cartTotalAmount + productPrice})),
    
    increaseCount: () => set((state: { itemCount: number; }) => 
        ({itemCount: state.itemCount + 1 })),
}));