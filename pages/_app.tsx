import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <link rel="icon" type="image/x-icon" href="../../public/favicon.ico"></link>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp

// import '../styles/globals.css'
// import { SessionProvider } from "next-auth/react"
// import type { AppProps } from "next/app"

// // Use of the <SessionProvider> is mandatory to allow components that call
// // `useSession()` anywhere in your application to access the `session` object.
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider session={pageProps.session} refetchInterval={0}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }
