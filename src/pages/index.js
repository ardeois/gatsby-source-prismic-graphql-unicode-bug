import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi !</h1>
    <Link to="/article/no-unicode">Go to article WITHOUT no unicode issue</Link>
    <br />
    <Link to="/article/with-unicode-アトハンス">
      Go to article WITH unicode issue
    </Link>
  </Layout>
)

export default IndexPage
