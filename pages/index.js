import Head from 'next/head'
import Navbar from 'components/Navbar'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Header />

      <main className={styles.main}>
        <p className={styles.description}>
          Software Engineering Student at Arizona State University 
          interested in Computer Security and Real Time Simulations.
        </p>
        <p>
        Currently splitting my time between second-year undergrad classes 
        and working on personal projects.
        </p>
      </main>

      <Footer />
    </div>
  )
}