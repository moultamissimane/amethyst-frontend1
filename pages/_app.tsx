import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <link rel="icon"  href="../../public/favicon.ico"></link>
  </Head>
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
