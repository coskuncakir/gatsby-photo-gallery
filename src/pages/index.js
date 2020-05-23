import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/gallery"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>A photo gallery like a 🚀</p>

    <Gallery />
  </Layout>
)

export default IndexPage
