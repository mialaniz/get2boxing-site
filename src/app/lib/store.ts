import {create} from "zustand"

export const useCartAmount = create(() => ({
    itemCount: 0,
    cartTotalAmount: 0,
    
    increaseTotalCartAmount: (productPrice: any) => ((state: {cartTotalAmount: number}) => 
        ({cartTotalAmount: state.cartTotalAmount + productPrice})),
    
    increaseCount: () => ((state: { itemCount: number; }) => 
        ({itemCount: state.itemCount + 1 })),
}));