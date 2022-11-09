import { Rounded } from './Buttons'
import styles from './sections.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1><Rounded href="/">Home</Rounded></h1>
      <nav>
        <ul>
          <li>Something1</li>
          <li>Something2</li>
          <li>Something3</li>
        </ul>
      </nav>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      footer
    </footer>
  )
}