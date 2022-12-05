import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './sections.module.scss'

export const Header = () => {
  const [open, setOpen] = useState<Boolean>(false)

  const currentUrl = useRouter().pathname

  const changeHambugerState = () => {
    setOpen((prevState) => !prevState)
  }

  const linkObject = (link: string, text: string) => {
    return link === currentUrl
      ? <Link href={link} onClick={changeHambugerState} className={`${styles.nav_link} ${styles.current_nav_link}`}>{text}</Link>
      : <Link href={link} onClick={changeHambugerState} className={styles.nav_link}>{text}</Link>
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_content_wrapper}>
        <Link href="/" className={styles.link}>
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
            <li>{linkObject("/about", "ソメイ塾について")}</li>
            <li>{linkObject("/curriculum", "授業案内")}</li>
            <li>{linkObject("/teacher", "講師案内")}</li>
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