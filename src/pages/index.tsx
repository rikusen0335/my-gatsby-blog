import { graphql, Link } from 'gatsby'
import React from 'react'
import { IndexHogeQuery } from "../../types/graphql-types"

type Props = {
  data: IndexHogeQuery
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>
        Welcome to your new{" "}
        <strong>{data.site?.siteMetadata?.title}</strong> site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
