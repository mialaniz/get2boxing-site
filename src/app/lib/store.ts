import {create} from "zustand"

export const useCartAmount = create((set) => ({
    itemCount: 0,
    
    //this is the amount we will pipe into stripe API.
    cartTotalAmount: 0,
    
    increaseTotalCartAmount: (productPrice: any) => set((state: {cartTotalAmount: number}) => 
        ({cartTotalAmount: state.cartTotalAmount + productPrice})),
    
    increaseCount: () => set((state: { itemCount: number; }) => 
        ({itemCount: state.itemCount + 1 })),
}));