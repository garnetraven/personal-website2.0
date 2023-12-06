import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className='links'>
            <a href="https://www.github.com/garnetraven" target="_blank" rel="noopener noreferrer">
                <img src="/images/github.png" alt="GitHub" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/in/corbinlienau" target="_blank" rel="noopener noreffer">
                <img src='/images/linkedin.png' alt="LinkedIn" width={24} height={24} />
            </a>
        </div>
        <a className="copyright">
            Corbin Lienau • 2023
        </a>
    </footer>
  )
}

export default Footer