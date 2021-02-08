import React from "react"
import Layout from "../components/layout"

import Link from "gatsby-link"
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Layout>
        <Link to="/blog/">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <p>This is a sample site for the Gatsby crash course.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Layout>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
