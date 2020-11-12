import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Prefetch } from '@xdn/react'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TwinDad's Coffee</title>
        <link rel="icon" href="/hot-coffee.gif" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to TwinDad's Coffee
        </h1>

        <p className={styles.description}>
          Get started by on your coffee journey
        </p>

        <div className={styles.grid}>
          <Link href="/beans" passHref>
            <Prefetch>
              <a className={styles.card}>
                <h3>Beans &rarr;</h3>
                <p>Git yer beans</p>
              </a>
            </Prefetch>
          </Link>
       
          <Link href="/gear" passHref>
            <Prefetch>
              <a className={styles.card}>
                <h3>Gear &rarr;</h3>
                <p>Find the gear you need to brew your best</p>
              </a>
            </Prefetch>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}