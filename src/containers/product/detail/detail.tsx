import { Button, makeStyles } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useContext } from 'react';
import { CartContext } from 'src/context/cart_context';

interface StackProps {
    product: Product;
}

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3),
    },
}));

export const ProductDetail = ({product}: StackProps) => {
    const classes = useStyles();
    const { addProduct } = useContext(CartContext);

    return <div className="product__detail">
        <div className="product__detail__image">
            <img src={product.image} alt={product.title}/>
        </div>
        <aside className="product__detail__aside">
            <h2 className="product__detail__title">{product.title}</h2>
            <p className="product__detail__description">{product.description}</p>
            <span className="product__detail__category">Categoría: {product.category}</span>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddShoppingCartIcon color="secondary" />}
                onClick={() => addProduct(product, 1)}
            >
                <span className="product__detail__textButton">Agregar al carrito</span>
            </Button>
        </aside>
    </div>;
}