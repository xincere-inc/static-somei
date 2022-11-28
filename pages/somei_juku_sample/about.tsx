import Layout from "../../components/Layouts"
import { TitleImage } from "../../components/TitleImage"
import { CherryText } from "../../components/Texts"
import styles from './home.module.scss'
import card_a1 from './assets/about_somei_1.png'
import card_a2 from './assets/about_somei_2.png'
import card_a3 from './assets/about_somei_3.png'
import Link from "next/link"

const Page = () => {
  return (
    <>
      <section className={styles.section_top}>
        <div className="container">
          <img src={card_a3.src} className={styles.header_image} alt="" />
          <div className="overlay">
            <div className={styles.overlay_left}>
              <div className={styles.triangle_base}><div className={styles.triangle}/></div>
              <div className={styles.overlay_text}>ソメイ塾について</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
      　<div className="row">
          <div className="col-12 col-md-8">
            <div className={styles.wrapper}>
              <CherryText><h2 className={styles.smallsubtitle}>素質に体質に合わせた授業展開、宿題の提供</h2></CherryText>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img src={card_a1.src} className="img_about1" alt="" />
          </div>
        </div>
      </section>
      <section className={styles.section}>
      　<div className="row">
          <div className="col-12 col-md-6">
            <img src={card_a2.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
      　<div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.wrapper}>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
              <div className={styles.content}>
                この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。この塾はこんなことをしています。
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={card_a3.src} className="img" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page