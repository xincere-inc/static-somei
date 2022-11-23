import Layout from "../../components/Layouts"

const Page = () => {
  return (
    <div>Teacher</div>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page