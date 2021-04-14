import App from "next/app";
import type { AppProps, AppContext } from 'next/app'
import "../sass/base.sass";

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
   const appProps = await App.getInitialProps(appContext);

   return { ...appProps }
}

export default MyApp