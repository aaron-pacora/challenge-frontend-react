import Link from "next/link";
import { useContext } from "react";
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { CartContext } from "src/context/cart_context";

interface StackProps {
    product: Product;
}

export const ProductItem = ({product}: StackProps) => {
    const { addProduct } = useContext(CartContext);
    
    return <div className="productItem">
        <div className="productItem__image">
            <img src={product.image} alt={product.title}/>
        </div>
        <div className="productItem__content">
            <Link href="/producto/[id]" as={`producto/${product.id}`}>
                <span className="productItem__title">{product.title}</span>
            </Link>
            <div className="productItem__footer">
                <span className="productItem__price">S/. {product.price}</span>
                <IconButton onClick={() => addProduct(product, 1)}>
                    <AddShoppingCartIcon color="error" />
                </IconButton>
            </div>
        </div>
    </div>;
}