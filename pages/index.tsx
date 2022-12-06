import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vishnuj</title>
        <meta name="description" content="a website made by nexjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>hi bob</div>
    </div>
  )
}
