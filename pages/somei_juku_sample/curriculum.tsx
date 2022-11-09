import Layout from "./components/Layouts"

const Page = () => {
  return (
    <div>Curriculum</div>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page