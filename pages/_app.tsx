import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
    <title>Nikson69</title>
  </Head>
  <Component {...pageProps} />
  </>
}
