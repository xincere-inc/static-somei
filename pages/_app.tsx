import '../styles/bootstrap.scss'
import '../styles/helpers.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
