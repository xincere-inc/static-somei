import Layout from "../../components/Layouts";
import { TitleImage } from "../../components/TitleImage";
import Image from "../assets/teacher_title_image.png";
import styles from "./index.module.scss";
import Card1 from "../assets/sato.png";
import Card2 from "../assets/matsumura.png";
import Card3 from "../assets/igarashi.png";
import { SingleLineCherryText } from "../../components/Texts";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo title="講師案内 | 私立医学部受験専門の個別指導予備校 | SOMEI合格プランナー" />
      <section className="section_top">
        <TitleImage imageSrc={Image.src} title="講師案内" />
      </section>
      <section className="section">
        <div className={`row ${styles.teacher_row}`}>
          <div className="col-12 col-md-4">
            <img src={Card1.src} className="img" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className={styles.teacher_content_wrapper}>
              <div className={styles.teacher_name_wrapper}>
                <SingleLineCherryText>
                  <p className={styles.teacher_name}>
                    英語
                    <br />
                    佐藤浩美（東京大学卒）
                  </p>
                </SingleLineCherryText>
              </div>
              <div className={styles.teacher_content}>
                ～長文の内容に興味が無い、頭に入ってこない人に贈る、英語の「解き方」～
                <br />
                <br />
                英語には、問題のネタになる箇所がおよそ決まっています。そのルールや解き方を知ることで、単語や文法の知識の「入れ方・使い方」が大きく変わってきます。大手予備校、医学部予備校、大手個別指導塾で、英語が嫌いすぎる生徒でも合格へ導いてきたその方法論を会得させて、英語の確実性をもった合格へ導きます。
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
              <div className={styles.teacher_name_wrapper}>
                <SingleLineCherryText>
                  <p className={styles.teacher_name}>
                    英語
                    <br />
                    松村洋輝（中央大学法学部卒）
                  </p>
                </SingleLineCherryText>
              </div>
              <div className={styles.teacher_content}>
                ～文章の一番大事な所の捉え方・見つけ方～
                <br />
                <br />
                文章の核心の部分をわからないまま読んでいませんか？核心の部分がわからないと、しっかり読む文章と、力を抜いて読む文章の区別がつかず、読む速度に速さが生まれません。そして、結果的にどれが大事だったのかが不明なまま、問題を解くことになります。文章の読み方からきっちりと教えます。着実な積み重ねで、合格に近づいていきます。
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
              <div className={styles.teacher_name_wrapper}>
                <SingleLineCherryText>
                  <p className={styles.teacher_name}>
                    数学
                    <br />
                    五十嵐健悟（早稲田大学卒）
                  </p>
                </SingleLineCherryText>
              </div>
              <div className={styles.teacher_content}>
                ～「忘れやすいんです、僕、私」を合格させる方法～
                <br />
                <br />
                記憶の定着度について、特殊な能力が無い限りは、受験数学においては、生徒たちはおよそ同じようなレベルまでには到達します。問題は、それを
                試験当日まで記憶し続けて、 問題の問われ方によらず対応し
                着実にアウトプットできるか
                これを実現するのは、とても簡単です。毎日触れ続ければ良いだけです。忘れやすいのであれば、人より多くやり続ければ良いだけです。その方法とサイクルを提供します。全てに毎週触れ続けていればいける気がしませんか？勉強の時間をしっかりと確保してくれれば、合格できます。
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
              <div className={styles.teacher_name_wrapper}>
                <SingleLineCherryText>
                  <p className={styles.teacher_name}>
                    小論文
                    <br />
                    松村洋輝（中央大学法学部卒）
                  </p>
                </SingleLineCherryText>
              </div>
              <div className={styles.teacher_content}>
                小論文 ～自分の「思い・気持ち」を文章と言葉に～
                <br />
                <br />
                受験を志したのであれば、何かしらの理由があるはずです。それを素直に小論文や面接で形にするという訓練がとても大切です。授業では、興味があるものを常に追って、一緒に生徒さんの目標の形を作っていきます。生徒さんが思うもので１つの大きな柱を作り、何を問われてもへし折られない自分を築き上げます。近年、難化している面接・小論文対策を普段から行うことで、医学部受験のモチベーションにつなぐことも行っています。
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
              <div className={styles.teacher_name_wrapper}>
                <SingleLineCherryText>
                  <p className={styles.teacher_name}>
                    化学
                    <br />
                    五十嵐健悟（早稲田大学卒）
                  </p>
                </SingleLineCherryText>
              </div>
              <div className={styles.teacher_content}>
                ～覚えるべきことと、覚えないで済む部分の区別をしっかりとさせる～
                <br />
                <br />
                化学に対する印象は、「暗記が多くてイヤ」というのが、大多数の生徒の言葉です。初めて教わった時の第一印象が悪い場合は、なおさら嫌いかもしれません。でも、医学部合格には必須となる化学をどう攻略するか？答えは簡単です。
                毎日触れ続けて、呼吸のように化学を解く
                これだけで受かります。そのためには、なるべく面白いイメージの授業、うまく順番が練られた課題などが必要で、全てを提供します。化学を得点源にできるようにお手伝いをします。
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Page;
