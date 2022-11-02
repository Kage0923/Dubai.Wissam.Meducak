import { useStaticQuery, graphql } from 'gatsby'

export const useBlogTags = () => {
  const { allArticleTag } = useStaticQuery(tagsQuery)
  return allArticleTag.nodes || []
}

const tagsQuery = graphql`
  query allArticleTagQuery {
    allArticleTag {
      nodes {
        ...ArticleTag
      }
    }
  }
`
