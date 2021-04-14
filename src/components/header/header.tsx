import { IconButton } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { useContext } from "react";
import { CartContext } from "src/context/cart_context";

export const Header = () => {
    const { cartProducts, displayPopUp, setDisplayPopUp } = useContext(CartContext);

    const handleDisplayPopUp = () => setDisplayPopUp(!displayPopUp);

    let quantity = 0;
    cartProducts.forEach((item) => quantity += item.quantity);
    return <div className="header">
        <h1 className="header__title">TiendaMía</h1>
        <div className="header__footer">
            <div className="header__logo">
                <img src="/images/logo.png" alt="Logo"/>
            </div>
            <h3 className="header__subtitle">Productos</h3>
            <div className="header__contentIconButton">
                <IconButton onClick={handleDisplayPopUp}>
                    <ShoppingBasketIcon color="error" />
                </IconButton>
                {quantity > 0 && <div className="header__contentIconButton__counter">
                    <span>{quantity}</span>
                </div>}
            </div>
        </div>
    </div>;
}