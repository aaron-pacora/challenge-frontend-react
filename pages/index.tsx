import { Header } from 'components/header/header';
import { ProductList } from 'containers/home/products-list/product-list';
import { FakestoreApi } from 'src/api/fakestore.api';
import { StatelessPage } from 'utils/stateless_page';

interface StackProps {
    products: Product[];
}

const IndexPage:StatelessPage<StackProps> = ({products}) => <>
    <title>TiendaMía</title>
    <Header/>
    <ProductList products={products}/>
</>

IndexPage.getInitialProps = async (_): Promise<StackProps> => {
    return {
        products: await FakestoreApi.getProducts()
    };
};

export default IndexPage;