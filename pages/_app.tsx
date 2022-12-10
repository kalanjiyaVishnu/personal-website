import "../styles/globals.css"
import "../styles/utilities.scss"

import type { AppProps } from "next/app"
import { Header } from "../components/Header/Header"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>vishnuj</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
