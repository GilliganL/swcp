import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  console.log(props)
  return (
  <Layout>
    <SEO title="Southwest Constructon Parts" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="/assets/gearPhone.svg" />
    </div>
  </Layout>
)}

export default IndexPage
