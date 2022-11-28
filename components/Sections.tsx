import Link from 'next/link'
import { useState } from 'react'
import styles from './sections.module.scss'

export const Header = () => {
  const [open, setOpen] = useState<Boolean>(false)

  const changeHambugerState = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_content_wrapper}>
        <Link href="/somei_juku_sample" className={styles.link}>
          <h1 className={styles.title_wrapper}>
            <span className={styles.logo}>ロゴ</span>
            <span className={styles.title}>予備校</span>
          </h1>
        </Link>
        <div className={styles.hamburger_menu} onClick={changeHambugerState}>
          <span className={open ? styles.clicked : ''} />
        </div>
        <nav className={open ? styles.nav_opened : styles.nav_closed}>
          <ul>
            <li><Link href="/somei_juku_sample/about" onClick={changeHambugerState} className={styles.nav_link}>ソメイ塾について</Link></li>
            <li><Link href="/somei_juku_sample/curriculum" onClick={changeHambugerState} className={styles.nav_link}>授業案内</Link></li>
            <li><Link href="/somei_juku_sample/teacher" onClick={changeHambugerState} className={styles.nav_link}>講師案内</Link></li>
            <li><Link href="/somei_juku_sample/plan" onClick={changeHambugerState} className={styles.nav_link}>料金プラン</Link></li>
          </ul>
        </nav>
      </div>
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