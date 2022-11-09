import Link from 'next/link'
import styles from './buttons.module.scss'

export const ButtonPrimary = ({
  href,
  children
} : {
  href: string
  children: JSX.Element | string
}) => {
  return <Link href={href} className={`${styles.rounded} ${styles.primary}`}>{children}</Link>
}

export const ButtonSecondary = ({
  href,
  children
} : {
  href: string
  children: JSX.Element | string
}) => {
  return <Link href={href} className={`${styles.rounded} ${styles.secondary}`}>{children}</Link>
}