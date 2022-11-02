import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticlePreview on Article {
    id
    title
    slug
    link
    excerpt @include(if: $includeExcerpt)
    timeToRead @include(if: $includeTimeToRead)
    featured
    thumbnailText
    date(formatString: "MMMM DD, YYYY")
    category {
      ...ArticleCategory
    }
    author {
      ...ArticleAuthor
    }
  }
`
