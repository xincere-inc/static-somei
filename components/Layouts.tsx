import { Footer, Header } from './Sections'

const Layout = ({children} : {children: JSX.Element}) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout