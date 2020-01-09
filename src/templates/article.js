import { graphql, Link } from "gatsby"
import React from "react"
import { get } from "lodash"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"

export const query = graphql`
  query ArticleQuery($uid: String) {
    prismic {
      allArticles(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            title
          }
        }
      }
    }
  }
`

export default function Article(props) {
  console.log("props", props)
  const title = get(props.data, "prismic.allArticles.edges.0.node.title", [])

  return (
    <Layout>
      {RichText.render(title)}
      <Link to="/">Back to index</Link>
    </Layout>
  )
}
