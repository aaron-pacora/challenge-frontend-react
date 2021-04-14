import { useCallback, useState } from "react"
import { CartContextData } from "src/context/cart_context";

export const useCartProductsValue = ():CartContextData => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

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

    return {
        cartProducts,
        addProduct
    }
}