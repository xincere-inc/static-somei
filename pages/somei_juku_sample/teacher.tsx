import Layout from "../../components/Layouts"
import { TitleImage } from "../../components/TitleImage"
import Image from './assets/teacher_title_image.png'
import styles from './home.module.scss'
import Card1 from './assets/teacher_card1.png'
import Card2 from './assets/teacher_card2.png'
import Card3 from './assets/teacher_card3.png'
import { SingleLineCherryText } from "../../components/Texts"

const Page = () => {
  return (
    <>
      <section className={styles.section_top}>
        <TitleImage imageSrc={Image.src} title='講師案内' />
      </section>
      <section className={styles.section}>
        <div className={`row ${styles.teacher_row}`}>
          <div className="col-12 col-md-4">
            <img src={Card1.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className={styles.teacher_content_wrapper}>
              <div  className={styles.teacher_name_wrapper}><SingleLineCherryText><p className={styles.teacher_name}>田中 太郎</p></SingleLineCherryText></div>
              <div className={styles.teacher_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br/><br/>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br/><br/>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.teacher_row}`}>
          <div className="col-12 col-md-4">
            <img src={Card2.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className={styles.teacher_content_wrapper}>
              <div  className={styles.teacher_name_wrapper}><SingleLineCherryText><p className={styles.teacher_name}>田中 太郎</p></SingleLineCherryText></div>
              <div className={styles.teacher_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br/><br/>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br/><br/>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.teacher_row}`}>
          <div className="col-12 col-md-4">
            <img src={Card3.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className={styles.teacher_content_wrapper}>
              <div  className={styles.teacher_name_wrapper}><SingleLineCherryText><p className={styles.teacher_name}>田中 太郎</p></SingleLineCherryText></div>
              <div className={styles.teacher_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br/><br/>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br/><br/>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page