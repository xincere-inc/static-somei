import Layout from "../../components/Layouts";
import { TitleImage } from "../../components/TitleImage";
import { SingleLineCherryText } from "../../components/Texts";
import Image from "../assets/curriculum_title_image.png";
import styles from "./index.module.scss";
import card_c1 from "../assets/curriculum_card_1.png";
import card_c2 from "../assets/curriculum_card_2.png";
import card_c3 from "../assets/curriculum_card_3.png";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo title="授業案内 | 私立医学部受験専門の個別指導予備校 | SOMEI合格プランナー" />
      <section className="section_top">
        <TitleImage imageSrc={Image.src} title="授業案内" />
      </section>
      <section className="section">
        <div className={`row ${styles.curriculum_row}`}>
          <div className="col-12 col-md-6">
            <div className={styles.content_img_wrapper}>
              <img src={card_c1.src} className="img" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="content_subtitle_top">
              <SingleLineCherryText>
                <p className="content_headline">チーム教育</p>
              </SingleLineCherryText>
            </div>
            <div className="content">
              SOMEI合格プランナーでは、合格のために必要な事を、「チーム医療」ならぬ「チーム教育」として連携して、生徒さんに関わっていきます。例えば、講師達の課題の量の調整受験校の決定を入試問題から行うなど、各講師が思うことを総括して、より合格に近くなる方法をとっていきます。
            </div>
          </div>
        </div>
        <div className={`row ${styles.curriculum_row}`}>
          <div className="col-12 col-md-6">
            <div className={styles.content_img_wrapper}>
              <img src={card_c2.src} className="img" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="content_subtitle_top">
              <SingleLineCherryText>
                <p className="content_headline">オーダーメイド学習</p>
              </SingleLineCherryText>
            </div>
            <div className="content">
              どこの個別指導塾でもこの「オーダーメイド学習」は提示されています。SOMEI合格プランナーでは、「一般的に言われる、習熟度に合わせたカリキュラム」以外に、カレンダーによる、日々の学習時間管理、生徒さんの休暇の設定などを提案し、合格に対して必要なものを用意していきます。
            </div>
          </div>
        </div>
        <div className={`row ${styles.curriculum_row}`}>
          <div className="col-12 col-md-6">
            <div className={styles.content_img_wrapper}>
              <img src={card_c3.src} className="img" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="content_subtitle_top">
              <SingleLineCherryText>
                <p className="content_headline">塾のコンセプト</p>
              </SingleLineCherryText>
            </div>
            <div className="content">
              医学部受験は、とても辛い、苦しい
              勉強は嫌だ。でも、受かって医師になりたい。ただのワガママに聞こえますが、これを形にすることを目標に、ワガママを聞きながら合格させる。
              これをモットーに、SOMEI合格プランナーは生まれました。社会人の方々には、「休日」がありますよね？受験生にも休日が必要です。こんなことも考えながら、合格プランニングをしていきます。
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Page;
