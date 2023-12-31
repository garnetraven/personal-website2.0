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
          interested in Computer Security and Machine Learning.
        </p>
        <p className={styles.description}>
          I have over 2 years of programming experience and a <a href="http://www.github.com/garnetraven" target='_blank'>handful of personal projects</a>.
        </p>
        <h1 className={styles.title}>
          Disciplines
        </h1>
        <hr />
        <h3>Software Engineering</h3>
        <ul>
          <li>
            Building scalable back-end applications & tools in Python, C, C++, Java, and JavaScript
          </li>
          <li>
            Designing reactive front-end UI's with HTML, CSS, and JavaScript
          </li>
          <li>
            Managing data with MySQL, MongoDB, and REST API's
          </li>
          <li>
            Maintaining projects with Git, GitHub and Docker
          </li>
          <li>
            Quickly learning new technologies, frameworks, and libraries while adapting to the needs of a project
          </li>
        </ul>
        <h1 className={styles.title}>
          Resume
        </h1>
        <hr />
        <p className={styles.description}>Here is the most recent version of my resume, and you can also access it by <a href='files/resume.pdf' target='_blank'>downloading the file</a>.</p>
        <img src='images/resume.png' alt='Resume' width={800} height={1035} />
        <h1 className={styles.title}>
          Contact
        </h1>
        <hr />
        <p className={styles.description}>
          Email: <a href="mailto:corbinchristopher1@gmail.com" target="_blank">corbinchristopher1@gmail.com</a>
        </p>
        <p>
          Discord: Corbin
        </p>
      </main>

      <Footer />
    </div>
  )
}