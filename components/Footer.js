import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className='links'>
            <a href="https://www.github.com/garnetraven" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/corbinlienau" target="_blank" rel="noopener noreffer">
                Linkedin
            </a>
        </div>
        <a className="copyright">
            Corbin Lienau • 2023
        </a>
    </footer>
  )
}

export default Footer