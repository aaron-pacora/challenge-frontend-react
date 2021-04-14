import { Header } from 'components/header/header';
import { ProductList } from 'containers/home/products-list/product-list';

const IndexPage = () => {
    return <>
        <Header/>
        <ProductList/>
    </>;
}

export default IndexPage;