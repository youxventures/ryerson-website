import React  from "react"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"


const Page = ({ pageContext }) => {
  const {
    page: { id, postId, title, content, excerpt },
  } = pageContext;

  return (
    <Layout>
      <Seo title={title} />

      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Page