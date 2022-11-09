import { Footer, Header } from './Sections'
import styles from './layouts.module.scss'

const Layout = ({children} : {children: JSX.Element}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default Layout