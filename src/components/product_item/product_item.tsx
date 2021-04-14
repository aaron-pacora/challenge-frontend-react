import Link from "next/link";
import AddShoppingCartSvg from 'svg-icons/add_shopping_cart.svg';

interface StackProps {
    product: Product;
}

export const ProductItem = ({product}: StackProps) => {
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
                <div className="productItem__addButton" role="button">
                    <AddShoppingCartSvg/>
                </div>
            </div>
        </div>
    </div>;
}