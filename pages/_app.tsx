import '../styles/bootstrap.scss'
import '../styles/helpers.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import Icon from "../pages/assets/logo.png";

export default function App({ Component, pageProps }: AppProps) {
  const defaultTitle = "私立医学部受験専門の個別指導予備校 | SOMEI合格プランナー";
  const defaultDescription = "超有名人気講師のみ在籍を実現させた私立医学部受験専門の個別指導予備校です。受験生、親御さん、資料請求・体験授業のご予約受付中ですので、お気軽にお問い合わせください。";
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo
        defaultTitle={defaultTitle}
        description={defaultDescription}
        openGraph={{
          type: "website",
          title: defaultTitle,
          description: defaultDescription,
          siteName: "SOMEI合格プランナーHP",
          url: "https://somei-goukaku.com/",
          images: [
            {
              url: Icon.src,
              width: 1147,
              height: 115,
              alt: "Somei goukaku plannner icon",
              type: "image/png"
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
