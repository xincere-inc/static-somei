import { Footer, Header } from './Sections'
import styles from './layouts.module.scss'
import { CvTag } from './Cvtag'

const Layout = ({children} : {children: JSX.Element}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.cv_tag_wrapper}>
        <CvTag link="/somei_juku_sample/about" content="資料請求・体験授業のご予約受付中" />
      </div>
      { children }
      <Footer />
    </div>
  )
}

export default Layout