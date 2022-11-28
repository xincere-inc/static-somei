import styles from './titleImage.module.scss'
import { CherryText } from "./Texts"

export const TitleImage = ({
  title,
  imageSrc,
} : {
  title: string,
  imageSrc: string
}) => {
  return (
    <>
      <div className={styles.title_image_wrapper}>
        <img src={imageSrc} className={styles.title_img} alt="" />
        <div className={styles.cherryText_wrapper}>
          <CherryText><h1 className={styles.title}>{title}</h1></CherryText>
        </div>
      </div>
    </>
  )
}