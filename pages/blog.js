import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts from local file
    fetch('/posts/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, []);

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
          Posts        
        </h1>

        {posts.map(post =>(
          <Link href={`/post/${post.id}`} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
        </Link>
        ))}
      </main>

      <Footer />
    </div>
  )
}