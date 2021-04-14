import App from "next/app";
import { useEffect } from "react";
import type { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from "@material-ui/core";

import { CartContext } from "src/context/cart_context";
import { useCartProductsValue } from "src/hooks/use-cart-products-value";
import theme from '../src/theme';
import "../sass/base.sass";

function MyApp({ Component, pageProps }: AppProps) {
   const {addProduct, cartProducts} = useCartProductsValue();
   useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles) {
         jssStyles?.parentElement?.removeChild(jssStyles)
      }
   }, [])
   return <CartContext.Provider value={{addProduct, cartProducts}}>
      <ThemeProvider theme={theme}>
         <Component {...pageProps} />
      </ThemeProvider>
   </CartContext.Provider>;
}

MyApp.getInitialProps = async (appContext: AppContext) => {
   const appProps = await App.getInitialProps(appContext);

   return { ...appProps }
}

export default MyApp