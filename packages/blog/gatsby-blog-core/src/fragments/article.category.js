import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticleCategory on ArticleCategory {
    id
    name
    slug
    color
    icon
  }
`
