import { useStaticQuery, graphql } from 'gatsby'
import dedupe from 'dedupe'

export const useBlogAuthors = () => {
  const { allArticleAuthor } = useStaticQuery(authorsQuery)
  return allArticleAuthor.nodes
    ? dedupe(allArticleAuthor.nodes, node => node.slug)
    : null
}

const authorsQuery = graphql`
  query allArticleAuthorQuery {
    allArticleAuthor {
      nodes {
        ...ArticleAuthor
      }
    }
  }
`
