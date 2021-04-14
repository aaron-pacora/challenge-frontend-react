import { useContext } from "react";
import { CartContext } from "src/context/cart_context";

export const PopUpCart = () => {
    const { displayPopUp, cartProducts } = useContext(CartContext);
    if(!displayPopUp) return null;
    let total = 0;
    cartProducts.forEach(({product, quantity}) => total += quantity * product.price);

    return <div className="popUpCart">
        <span className="popUpCart__title">Carrito de compra</span>
        <div className="popUpCart__list">
            {cartProducts.map(({product, quantity}) => <div
                key={product.id}
                className="popUpCart__item"
            >
                <span className="popUpCart__item__quantity">x{quantity}</span>
                <span className="popUpCart__item__title">{product.title}</span>
                <span className="popUpCart__item__price">S/. {(quantity * product.price).toFixed(2)}</span>
            </div>)}
        </div>
        <div className="popUpCart__contentTotal">
            <span className="popUpCart__contentTotal__text">Total: </span>
            <span className="popUpCart__contentTotal__mount">S/. {total.toFixed(2)}</span>
        </div>
    </div>;
}