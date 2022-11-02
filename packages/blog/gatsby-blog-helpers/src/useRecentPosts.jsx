import { useStaticQuery, graphql } from 'gatsby'

export const useRecentPosts = () => {
  const { recentPosts } = useStaticQuery(recentPostsQuery)
  return recentPosts.nodes || null
}

const recentPostsQuery = graphql`
  query allRecentArticleQuery(
    $includeExcerpt: Boolean! = true
    $includeTimeToRead: Boolean! = true
    $imageQuality: Int! = 75
  ) {
    recentPosts: allArticle(
      filter: { private: { ne: true }, draft: { ne: true } }
      sort: { fields: [date], order: DESC }
      limit: 6
    ) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
    }
  }
`
