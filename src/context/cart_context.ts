import { createContext } from "react";

export interface CartContextData {
    displayPopUp: boolean;
    setDisplayPopUp: (value:boolean) => void;
    cartProducts: CartProduct[];
    addProduct: (product:Product, quantity: number) => void;
}

export const cartContextDefaultValue: CartContextData = {
    displayPopUp: false,
    cartProducts: [],
    addProduct: () => null,
    setDisplayPopUp: () => null,
}

export const CartContext = createContext<CartContextData>(cartContextDefaultValue);