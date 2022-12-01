import styles from './texts.module.scss'

export const CherryText = ({children}: {children: JSX.Element | string}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <div className={styles.svg_container}>
          <svg viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
            <path d="M46.559 9.3454L37.3012 10.362L39.5318 1.3278C39.5318 1.3278 24.9622 -2.23501 12.2994 8.83951C-0.363372 19.914 0.194355 36.5742 1.22643 41.9178C6.38357 43.6423 22.8488 46.4027 35.5116 35.3282C48.1743 24.2537 46.562 9.35492 46.562 9.35492L46.559 9.3454Z" fill="#DE739A"/>
            <path d="M12.1168 26.524C26.1962 18.7611 37.0833 20.2572 52.1046 32.741C62.609 41.4781 57.2485 41.1765 53.7274 42.1211C50.2051 43.0798 49.9608 42.3575 51.9973 43.7904C54.0415 45.2169 57.3291 46.2871 55.7398 48.1384C54.157 49.9974 40.3165 54.08 30.3904 51.5375C23.1784 49.7122 17.9435 44.8843 10.1063 37.6758C2.26252 30.4595 2.75482 31.6918 12.1168 26.524Z" fill="#E8A1BF"/>
          </svg>
        </div>
      </div>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}

export const SingleLineCherryText = ({children}: {children: JSX.Element | string}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.single_line_icon}>
        <div className={styles.svg_container}>
          <svg viewBox="-65 0 125 53" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
            <path d="M46.559 9.3454L37.3012 10.362L39.5318 1.3278C39.5318 1.3278 24.9622 -2.23501 12.2994 8.83951C-0.363372 19.914 0.194355 36.5742 1.22643 41.9178C6.38357 43.6423 22.8488 46.4027 35.5116 35.3282C48.1743 24.2537 46.562 9.35492 46.562 9.35492L46.559 9.3454Z" fill="#DE739A"/>
            <path d="M12.1168 26.524C26.1962 18.7611 37.0833 20.2572 52.1046 32.741C62.609 41.4781 57.2485 41.1765 53.7274 42.1211C50.2051 43.0798 49.9608 42.3575 51.9973 43.7904C54.0415 45.2169 57.3291 46.2871 55.7398 48.1384C54.157 49.9974 40.3165 54.08 30.3904 51.5375C23.1784 49.7122 17.9435 44.8843 10.1063 37.6758C2.26252 30.4595 2.75482 31.6918 12.1168 26.524Z" fill="#E8A1BF"/>
          </svg>
        </div>
      </div>
      <div className={styles.text}>
        {children}
      </div>
    </div>
  )
}