import { Rounded } from './Buttons'
import styles from './sections.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Rounded href="/">戻る</Rounded></li>
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