import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Summary      
        </h1>
        <hr />
        <p className={styles.description}>
          I am a Software Engineering Student at Arizona State University 
          interested in Computer Security and Real Time Simulations.
        </p>
        <h1>
          Disciplines
        </h1>
        <hr />
        <p>
          Lorem ipsum...
        </p>
        <h1>
          Resume
        </h1>
        <p>Below, you can find the latest copy of my resume. You can also <a href='files/resume.pdf' target='_blank'>download it</a>.</p>
        <hr />
        <h1>
          Contact
        </h1>
        <hr />
        <p>
          Email: <a href="mailto:corbinchristopher1@gmail.com" target="_blank">corbinchristopher1@gmail.com</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}