import { CartButton } from "components/cart_button/cart_button";

export const Header = () => <div className="header">
    <h1 className="header__title">TiendaMía</h1>
    <div className="header__footer">
        <div className="header__logo">
            <img src="/images/logo.png" alt="Logo"/>
        </div>
        <h3 className="header__subtitle">Productos</h3>
        <CartButton/>
    </div>
</div>