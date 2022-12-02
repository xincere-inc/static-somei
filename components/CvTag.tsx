import styles from './cvTag.module.scss'
import Link from "next/link"
import { useRouter } from 'next/router'

export const CvTag = ({
  link,
  content
} : {
  link: string,
  content: string
}) => {

  const currentUrl = useRouter().pathname

  const cvTagObject = <div className={styles.cv_tag_wrapper}>
                        <Link className={styles.cv_tag_link} href={link}>
                          <div className={styles.cv_tag_top_box}>&gt;</div>
                          <div className={styles.cv_tag_text_wrapper}>
                            <p className={styles.cv_tag_text}>{content}</p>
                          </div>
                        </Link>
                      </div>
  return (
    <>
      {
        currentUrl === link
          ? null
          : cvTagObject
      }
    </>
  )
}