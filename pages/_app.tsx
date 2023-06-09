import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="author" content="Saadia El fekak" />
        <meta name="description" content="Simply Fashion Store"></meta>
        <title>Simply.</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
