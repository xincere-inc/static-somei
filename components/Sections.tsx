import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./sections.module.scss";
import card from "../pages/assets/logo.png";

export const Header = () => {
  const [open, setOpen] = useState<Boolean>(false);

  const currentUrl = useRouter().pathname;

  const changeHambugerState = () => {
    setOpen((prevState) => !prevState);
  };

  const linkObject = (link: string, text: string) => {
    return link === currentUrl ? (
      <Link
        href={link}
        onClick={changeHambugerState}
        className={`${styles.nav_link} ${styles.current_nav_link}`}
      >
        {text}
      </Link>
    ) : (
      <Link
        href={link}
        onClick={changeHambugerState}
        className={styles.nav_link}
      >
        {text}
      </Link>
    );
  };

  const logoElement = () => {
    return currentUrl === "/"
      ? <Link href="/" className={styles.link}>
          <h1 className={styles.title_wrapper}>
            <img src={card.src} className={styles.logo} alt="ロゴ" />
          </h1>
        </Link>
      : <Link href="/" className={styles.link}>
          <h2 className={styles.title_wrapper}>
            <img src={card.src} className={styles.logo} alt="ロゴ" />
          </h2>
        </Link>
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content_wrapper}>
        { logoElement() }
        <div className={styles.hamburger_menu} onClick={changeHambugerState}>
          <span className={open ? styles.clicked : ""} />
        </div>
        <nav className={open ? styles.nav_opened : styles.nav_closed}>
          <ul>
            <li>{ linkObject("/about", "ソメイ塾について") }</li>
            <li>{ linkObject("/curriculum", "授業案内") }</li>
            <li>{ linkObject("/teacher", "講師案内") }</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright © somei All Rights Reserved.<br/>
      <a href="https://residence.xincere.jp/" target="_blank" rel="noopener noreferrer">都内の部屋探しならシンシアレジデンス</a>
    </footer>
  );
};
