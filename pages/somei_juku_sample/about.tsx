import Layout from "../../components/Layouts"

const Page = () => {
  return (
    <div>About</div>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page