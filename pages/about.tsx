import Layout from "../components/Layouts"
import { TitleImage } from "../components/TitleImage"
import { SingleLineCherryText } from "../components/Texts"
import Image from './assets/about_title_image.png'
import styles from './home.module.scss'
import card_a1 from './assets/about_somei_1.png'
import card_a2 from './assets/about_somei_2.png'
import card_a3 from './assets/about_somei_3.png'

const Page = () => {
  return (
    <>
      <section className={styles.section_top}>
        <TitleImage imageSrc={Image.src} title='ソメイ塾について' />
      </section>
      <section className={styles.section}>
        <div className={`row ${styles.about_row}`}>
          <div className="col-12 col-md-4">
            <img src={card_a1.src} className="img_about1" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className={styles.about_wrapper}>
              <div className={styles.about_headline}>
                <SingleLineCherryText><p className={styles.about_headline_top}>この塾はこんなことをしています</p></SingleLineCherryText>
              </div>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.about_row}`}>
          <div className="col-12 col-md-6">
            <img src={card_a2.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.about_wrapper}>
              <SingleLineCherryText><p className={styles.about_headline}>この塾はこんなことをしています</p></SingleLineCherryText>
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
        <div className={`row ${styles.about_row}`}>
          <div className="col-12 col-md-6">
            <img src={card_a3.src} className="img_about3" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.about_wrapper}>
              <SingleLineCherryText><p className={styles.about_headline}>この塾はこんなことをしています</p></SingleLineCherryText>
              <div className={styles.about_content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。<br></br><p></p>この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
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