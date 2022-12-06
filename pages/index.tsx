import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>vishnuj</title>
        <meta name="description" content="a website made by nexjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-xl font-bold underline">Hello bob!</h1>
    </div>
  )
}
