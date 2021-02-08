import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <div>
      <h1>About this site</h1>
      <p>Welcome to my website.</p>
      <p>This is my about page.</p>
    </div>
    <Link to="/services/">Go to Services page</Link> <br />
  </Layout>
)
export default AboutPage
