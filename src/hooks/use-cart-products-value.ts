import { useCallback, useState } from "react"
import { CartContextData } from "src/context/cart_context";

export const useCartProductsValue = ():CartContextData => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
    const [displayPopUp, setThisDisplayPopUp] = useState<boolean>(false);

    const addProduct = useCallback((entryProduct:Product, quantity:number) => {
        const newCartProducts = [...cartProducts];
        const indexCartProduct = newCartProducts.findIndex((_cart) => _cart.product.id === entryProduct.id);
        if(indexCartProduct !== -1){
            const cartProduct = newCartProducts[indexCartProduct];
            cartProduct.quantity = cartProduct.quantity + quantity;
            newCartProducts[indexCartProduct] = cartProduct;
        }else{
            newCartProducts.push({ product: entryProduct, quantity } as CartProduct);
        }
        setCartProducts(newCartProducts);
    }, [cartProducts, setCartProducts]);

    const setDisplayPopUp = useCallback((value:boolean) => {
        if(value){
            if(cartProducts.length == 0){
                setThisDisplayPopUp(false);
                return;
            }
        }
        setThisDisplayPopUp(value);
    }, [cartProducts, displayPopUp, setThisDisplayPopUp]);

    return {
        cartProducts,
        addProduct,
        displayPopUp,
        setDisplayPopUp
    }
}