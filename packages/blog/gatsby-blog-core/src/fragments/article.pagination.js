import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticlePagination on ArticleConnection {
    pageInfo {
      pageCount
      hasPreviousPage
      hasNextPage
      currentPage
    }
    totalCount
  }
`
