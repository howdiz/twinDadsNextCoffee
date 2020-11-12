import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Prefetch } from '@xdn/react'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TwinDad's Coffee  Gear</title>
        <link rel="icon" href="/hot-coffee.gif" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            TwinDad's Coffee Gear
        </h1>

        <p className={styles.description}>
          Get your morning started with the right gear
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
