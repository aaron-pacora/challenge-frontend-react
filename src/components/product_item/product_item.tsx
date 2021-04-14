interface StackProps {
    product: Product;
}

export const ProductItem = ({product}: StackProps) => {
    return <div className="productItem">
        <span>{product.title}</span>
    </div>;
}