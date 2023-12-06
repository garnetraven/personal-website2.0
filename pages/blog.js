// pages/posts/[id].js
import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import styles from '../../styles/Blog.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content="My blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          {postData.title}        
        </h1>

        <div className={styles.description} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}