import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticleTag on ArticleTag {
    id
    name
    slug
  }
`
