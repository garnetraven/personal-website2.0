import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const router = useRouter()

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <a href="/" className={router.pathname === '/' ? 'active' : ''}><b>Home</b></a>
        <a href="/about" className = {router.pathname === '/about' ? 'active' : ''}><b>About</b></a>
        <a href="/blog" className = {router.pathname === '/blog' ? 'active' : ''}><b>Blog</b></a>
      </div>
    </nav>
  )
}

export default Navbar