import Layout from "../../components/Layouts"
import { TitleImage } from "../../components/TitleImage"
import Image from './assets/about_title_image.png'
import styles from './home.module.scss'

const Page = () => {
  return (
    <>
      <section className={styles.section_top}>
        <TitleImage imageSrc={Image.src} title='ソメイ塾について' />
      </section>
    </>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page