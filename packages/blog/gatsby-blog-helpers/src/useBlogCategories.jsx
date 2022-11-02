import { useStaticQuery, graphql } from 'gatsby'
import dedupe from 'dedupe'

export const useBlogCategories = () => {
  const { allArticleCategory } = useStaticQuery(categoriesQuery)
  return allArticleCategory.nodes
    ? dedupe(allArticleCategory.nodes, node => node.slug)
    : null
}

const categoriesQuery = graphql`
  query allArticleCategoryQuery {
    allArticleCategory {
      nodes {
        ...ArticleCategory
      }
    }
  }
`
