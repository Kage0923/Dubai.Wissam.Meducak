import { graphql } from 'gatsby'
import PostPage from '../containers/Post'

export default PostPage

export const pageQuery = graphql`
  query PostPageQuery(
    $id: String!
    $previousId: String
    $nextId: String
    $categoryId: String
    $tagsIds: [String]
    $hasTags: Boolean!
    $includeExcerpt: Boolean!
    $includeTimeToRead: Boolean!
    $includeTableOfContents: Boolean!
    $imageQuality: Int!
  ) {
    post: article(id: { eq: $id }) {
      ...ArticleInformation
      ...ArticleThumbnailRegular
    }

    # Related posts based on tags and category
    tagCategoryPosts: allArticle(
      filter: {
        private: { ne: true }
        draft: { ne: true }
        tags: { elemMatch: { id: { in: $tagsIds } } }
        category: { id: { eq: $categoryId } }
        id: { ne: $id }
      }
      sort: { fields: [date], order: DESC }
      limit: 6
    ) @include(if: $hasTags) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
    }

    # Related posts based on tags only
    tagPosts: allArticle(
      filter: {
        private: { ne: true }
        draft: { ne: true }
        tags: { elemMatch: { id: { in: $tagsIds } } }
        id: { ne: $id }
      }
      sort: { fields: [date], order: DESC }
      limit: 6
    ) @include(if: $hasTags) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
    }

    # Related posts based on category only
    categoryPosts: allArticle(
      filter: {
        private: { ne: true }
        draft: { ne: true }
        category: { id: { eq: $categoryId } }
        id: { ne: $id }
      }
      sort: { fields: [date], order: DESC }
      limit: 6
    ) {
      nodes {
        ...ArticlePreview
        ...ArticleThumbnailRegular
      }
    }

    previous: article(id: { eq: $previousId }) {
      id
      slug
      title
    }

    next: article(id: { eq: $nextId }) {
      id
      slug
      title
    }
  }
`
