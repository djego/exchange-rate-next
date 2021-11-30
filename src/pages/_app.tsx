import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Metrics } from '@layer0/rum'

new Metrics({
  token: 'b1a180b7-a5f7-4191-9a67-0af87c9b08ee'
}).collect()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
