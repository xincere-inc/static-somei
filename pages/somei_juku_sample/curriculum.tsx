import Layout from "../../components/Layouts"
import { TitleImage } from "../../components/TitleImage"
import { SingleLineCherryText } from "../../components/Texts"
import Image from './assets/curriculum_title_image.png'
import styles from './home.module.scss'
import card_c1 from './assets/curriculum_card_1.png'
import card_c2 from './assets/curriculum_card_2.png'
import card_c3 from './assets/curriculum_card_3.png'

const Page = () => {
  return (
    <>
      <section className={styles.section_top}>
        <TitleImage imageSrc={Image.src} title='授業案内' />
      </section>
      <section className={styles.section}>
        <div className={`row ${styles.curriculum_row}`}>
          <div className="col-12 col-md-6">
            <img src={card_c1.src} className="img_curriculum" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.about_wrapper}>
              <SingleLineCherryText><p className={styles.about_headline_top}>チーム教育</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <SingleLineCherryText><p className={styles.about_headline_middle}>この塾はこんなことをしています</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br></br><p></p>この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.curriculum_row}`}>
          <div className="col-12 col-md-6">
            <img src={card_c2.src} className="img_curriculum" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.about_wrapper}>
              <SingleLineCherryText><p className={styles.about_headline_top}>オーダーメイド学習</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <SingleLineCherryText><p className={styles.about_headline_middle}>この塾はこんなことをしています</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br></br><p></p>この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.curriculum_row}`}>
          <div className="col-12 col-md-6">
            <img src={card_c3.src} className="img_curriculum" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.about_wrapper}>
              <SingleLineCherryText><p className={styles.about_headline_top}>塾のコンセプト</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <SingleLineCherryText><p className={styles.about_headline_middle}>この塾はこんなことをしています</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br></br><p></p>この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
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