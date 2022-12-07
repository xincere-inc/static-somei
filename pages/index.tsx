import Layout from "../components/Layouts";
import { Slider, SliderItem } from "../components/Slider";
import { CherryText } from "../components/Texts";
import image1 from "./assets/home1.png";
import teacher from "./assets/home_teacher.png";
import styles from "./home.module.scss";
import card1 from "./assets/home_card_1.png";
import card2 from "./assets/home_card_2.png";
import card3 from "./assets/home_card_3.png";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className={styles.section_top}>
        <Slider>
          <SliderItem>
            <div className="container">
              <img src={image1.src} className={styles.slider_img} alt="" />
              <div className="overlay">
                <div className={styles.overlay}>
                  <div className={styles.triangle_base}>
                    <div className={styles.triangle} />
                  </div>
                  <div className={styles.overlay_text}>
                    全科目の先生が一人の
                    <br className={styles.with_mobile} />
                    生徒状況、
                    <br className={styles.without_mobile} />
                    得意不得意、
                    <br className={styles.with_mobile} />
                    医師への資質などを
                    <br className={styles.with_mobile} />
                    情報共有していくスタイル
                  </div>
                </div>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <div className="container">
              <img src={image1.src} className={styles.slider_img} alt="" />
              <div className="overlay">
                <div className={styles.overlay}>
                  <div className={styles.triangle_base}>
                    <div className={styles.triangle} />
                  </div>
                  <div className={styles.overlay_text}>
                    全科目の先生が一人の
                    <br className={styles.with_mobile} />
                    生徒状況、
                    <br className={styles.without_mobile} />
                    得意不得意、
                    <br className={styles.with_mobile} />
                    医師への資質などを
                    <br className={styles.with_mobile} />
                    情報共有していくスタイル
                  </div>
                </div>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <div className="container">
              <img src={image1.src} className={styles.slider_img} alt="" />
              <div className="overlay">
                <div className={styles.overlay}>
                  <div className={styles.triangle_base}>
                    <div className={styles.triangle} />
                  </div>
                  <div className={styles.overlay_text}>
                    全科目の先生が一人の
                    <br className={styles.with_mobile} />
                    生徒状況、
                    <br className={styles.without_mobile} />
                    得意不得意、
                    <br className={styles.with_mobile} />
                    医師への資質などを
                    <br className={styles.with_mobile} />
                    情報共有していくスタイル
                  </div>
                </div>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <div className="container">
              <img src={image1.src} className={styles.slider_img} alt="" />
              <div className="overlay">
                <div className={styles.overlay}>
                  <div className={styles.triangle_base}>
                    <div className={styles.triangle} />
                  </div>
                  <div className={styles.overlay_text}>
                    全科目の先生が一人の
                    <br className={styles.with_mobile} />
                    生徒状況、
                    <br className={styles.without_mobile} />
                    得意不得意、
                    <br className={styles.with_mobile} />
                    医師への資質などを
                    <br className={styles.with_mobile} />
                    情報共有していくスタイル
                  </div>
                </div>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <div className="container">
              <img src={image1.src} className={styles.slider_img} alt="" />
              <div className="overlay">
                <div className={styles.overlay}>
                  <div className={styles.triangle_base}>
                    <div className={styles.triangle} />
                  </div>
                  <div className={styles.overlay_text}>
                    全科目の先生が一人の
                    <br className={styles.with_mobile} />
                    生徒状況、
                    <br className={styles.without_mobile} />
                    得意不得意、
                    <br className={styles.with_mobile} />
                    医師への資質などを
                    <br className={styles.with_mobile} />
                    情報共有していくスタイル
                  </div>
                </div>
              </div>
            </div>
          </SliderItem>
        </Slider>
      </section>
      <section className={styles.section}>
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={teacher.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.wrapper}>
              <CherryText>
                <h2 className={styles.subtitle}>
                  素質に体質に合わせた
                  <br />
                  授業展開、宿題の提供
                </h2>
              </CherryText>
              <div className={styles.button}>
                <Link className="btn-primary" href="/about">
                  <div className={styles.button_text}>詳しくみる</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section_bottom}`}>
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="container p-3">
              <div className={styles.overlay_card_wrapper}>
                <img src={card1.src} className="img" alt="" />
                <div className="overlay">
                  <div className={styles.overlay_card}>
                    <div className={styles.overlay_card_title}>チーム教育</div>
                    <div className={styles.overlay_card_content}>
                      我が予備校はチーム医療全科目の先生が一人の生徒状況、得意不得意、医師への資質などを情報共有していくスタイル
                    </div>
                    <div className={styles.overlay_card_button}>
                      <Link className="btn-primary" href="/curriculum">
                        <div className={styles.button_text}>詳しくみる</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="container">
              <div className={styles.overlay_card_wrapper}>
                <img src={card2.src} className="img" alt="" />
                <div className="overlay">
                  <div className={styles.overlay_card}>
                    <div className={styles.overlay_card_title}>
                      オーダーメイド学習
                    </div>
                    <div className={styles.overlay_card_content}>
                      オーダーメイドホームワーク一人一人の能力、素質に体質に合わせた授業展開、宿題の提供
                    </div>
                    <div className={styles.overlay_card_button}>
                      <Link className="btn-primary" href="/curriculum">
                        <div className={styles.button_text}>詳しくみる</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="container p-3">
              <div className={styles.overlay_card_wrapper}>
                <img src={card3.src} className="img" alt="" />
                <div className="overlay">
                  <div className={styles.overlay_card}>
                    <div className={styles.overlay_card_title}>
                      塾のコンセプト
                    </div>
                    <div className={styles.overlay_card_content}>
                      大手予備校人気プロ講師のみ在籍を可能した最強プロ講師医学部専門予備校
                    </div>
                    <div className={styles.overlay_card_button}>
                      <Link className="btn-primary" href="/curriculum">
                        <div className={styles.button_text}>詳しくみる</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.bg_gray}`}>
        <div className={styles.reserve}>
          <CherryText>
            <h2 className={styles.reserve_title}>
              資料請求/体験授業の
              <br />
              ご予約受付中
            </h2>
          </CherryText>
          <div className={styles.reserve_button}>
            <Link className="btn-secondary" href="/">
              <div className={styles.button_text}>応募する</div>
            </Link>
          </div>
          <div className={styles.reserve_contact}>
            お電話でも受付ています。お気軽にご連絡ください。
            <br />
            受付時間：月〜金 11:00-17:00
          </div>
        </div>
      </section>
    </>
  );
};

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Page;
