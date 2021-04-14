import { Header } from 'components/header/header';
import { ProductDetail } from 'containers/product/detail/detail';
import { FakestoreApi } from 'src/api/fakestore.api';
import { StatelessPage } from 'utils/stateless_page';

interface StackProps {
    product: Product;
}

const ProductDetailPage:StatelessPage<StackProps> = ({product}) => <>
    <Header/>
    <ProductDetail product={product}/>
</>

ProductDetailPage.getInitialProps = async (ctx): Promise<StackProps> => {
    return {
        product: await FakestoreApi.getProductById(ctx.query.id)
    };
};

export default ProductDetailPage;