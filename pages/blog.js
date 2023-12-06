import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import styles from '../styles/Blog.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="My blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          My Blog Posts        
        </h1>

        <p className={styles.description}>
          Coming soon...
        </p>
      </main>

      <Footer />
    </div>
  )
}