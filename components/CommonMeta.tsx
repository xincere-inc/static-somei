import Head from "next/head";
import { useRouter } from "next/router";
import Icon from "../pages/assets/logo.png";

export const CommonMeta = ({
  pageTitle,
  pageDescription,
  pageImgUrl,
  PageImgWidth,
  pageImgHeight
} : {
  pageTitle?: string,
  pageDescription?: string,
  pageImgUrl?: string,
  PageImgWidth?: number,
  pageImgHeight?: number
}) => {
  const defaultTitle = "私立医学部受験専門の個別指導予備校 | SOMEI合格プランナー";
  const defaultDescription = "超有名人気講師のみ在籍を実現させた私立医学部受験専門の個別指導予備校です。受験生、親御さん、資料請求・体験授業のご予約受付中ですので、お気軽にお問い合わせください。";
  const defaultImgUrl = Icon.src;

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = useRouter().pathname;
  const imgUrl = pageImgUrl ?? defaultImgUrl;
  const imgWidth = PageImgWidth ?? 1147;
  const imgHeight = pageImgHeight ?? 115;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={url} />
    </Head>
  )
}