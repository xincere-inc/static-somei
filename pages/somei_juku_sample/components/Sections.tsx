import Link from 'next/link'
import styles from './sections.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/somei_juku_sample" className={styles.link}>
        <h1>
          <span className={styles.logo}>ロゴ</span>
          <span className={styles.title}>予備校</span>
        </h1>
      </Link>
      <nav>
        <ul>
          <li><Link href="/somei_juku_sample/about" className={styles.link}>ソメイ塾について</Link></li>
          <li><Link href="/somei_juku_sample/curriculum" className={styles.link}>授業案内</Link></li>
          <li><Link href="/somei_juku_sample/teacher" className={styles.link}>講師案内</Link></li>
          <li><Link href="/somei_juku_sample/plan" className={styles.link}>料金プラン</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright © somei All Rights Reserved.
    </footer>
  )
}