import Layout from "../../components/Layouts";
import { TitleImage } from "../../components/TitleImage";
import { SingleLineCherryText } from "../../components/Texts";
import Image from "../assets/about_title_image.png";
import styles from "./index.module.scss";
import card_a1 from "../assets/about_somei_1.png";
import card_a2 from "../assets/about_somei_2.png";
import { CommonMeta } from "../../components/CommonMeta";

const Page = () => {
  return (
    <>
      <CommonMeta pageTitle="ソメイ塾について" />
      <section className="section_top">
        <TitleImage imageSrc={Image.src} title="ソメイ塾について" />
      </section>
      <section className="section">
        <div className={`row ${styles.about_row}`}>
          <div className="col-12 col-md-4">
            <div className={styles.content_img_wrapper}>
              <img src={card_a1.src} className="img_about1" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="content_subtitle_top">
              <SingleLineCherryText>
                <p className="content_headline">
                  SOMEI合格プランナーについて
                </p>
              </SingleLineCherryText>
            </div>
            <div className="content">
              個性・性格・体質に合わせた授業展開と宿題の提供
              ・授業展開。興味のわく話題でないと、頭に入ってこない。前回の授業の内容を確認してほしい・・・。様々な要望があって当たり前です。性格や興味のあるものにネタを合わせて、本質を提供し続ける授業を目指します。
            </div>
          </div>
        </div>
        <div className={`row ${styles.about_row}`}>
          <div className="col-12 col-md-6">
            <div className={styles.content_img_wrapper}>
              <img src={card_a2.src} className="img" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="content_subtitle">
              <SingleLineCherryText>
                <p className="content_headline">
                  SOMEI合格プランナーが提供する「一人一人のための宿題」
                </p>
              </SingleLineCherryText>
            </div>
            <div className="content">
              宿題は、生徒さん一人一人のペースに合わせて、書き込めるプリント形式にしてお渡ししています。
              <ul>
                <li>「参考書だと、なんかやる気にならない」</li>
                <li>「分厚い参考書を開く気にならない」</li>
                <li>「ノートにやるのはいやだ」</li>
              </ul>
              生徒さんのある程度のワガママに対応することは、講師としても当然のサービスだと考えています。興味がわかなくても、受験で使うならやるしかない。その皆さんの我慢が合格につながるよう、最善を尽くします。
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Page;
