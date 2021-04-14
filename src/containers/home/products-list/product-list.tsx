import { ProductItem } from "components/product_item/product_item";

interface StackProps {
    products: Product[];
}

export const ProductList = ({products} : StackProps) => {
    return <div className="home__productList">
        {products.map((product) => <ProductItem
            key={product.id}
            product={product}
        />)}
    </div>;
}