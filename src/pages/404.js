import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ width: '100%' }}>
      <h1 style={{ width: '100%' }}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

export default NotFoundPage
