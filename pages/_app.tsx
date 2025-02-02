import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import React, { JSX } from 'react';

// export default function App({ Component, pageProps }: AppProps): JSX.Element {
//   return <Component {...pageProps} />;
// }

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop - наш лучший топ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}
