import styles from '../styles/Header.module.css'
import Boids from './Boids'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
          Corbin Lienau        
        </h1>
        {/* <Boids /> */}
    </header>
  )
}

export default Header
