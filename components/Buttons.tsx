import Link from 'next/link'
import styles from './buttons.module.scss'

export const Rounded = ({
  href,
  children
} : {
  href: string
  children: JSX.Element | string
}) => {
  return <Link href={href} className={styles.rounded}>{children}</Link>
}