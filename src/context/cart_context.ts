import { createContext } from "react";

export interface CartContextData {
    cartProducts: CartProduct[];
    addProduct: (product:Product, quantity: number) => void;
}

export const cartContextDefaultValue: CartContextData = {
    cartProducts: [],
    addProduct: () => null
}

export const CartContext = createContext<CartContextData>(cartContextDefaultValue);