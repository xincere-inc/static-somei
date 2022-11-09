import Layout from "./components/Layouts"

const Page = () => {
  return (
    <div>Plan</div>
  )
}

Page.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>

export default Page