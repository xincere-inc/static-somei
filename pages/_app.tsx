import '../styles/bootstrap.scss'
import type { AppProps } from 'next/app'
import { Footer, Header } from '../components/Sections'

const Layout = ({children} : {children: JSX.Element}) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
