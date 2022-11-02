import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticleAuthor on ArticleAuthor {
    id
    name
    slug
    title
    description
    skills
    social {
      name
      url
    }
    thumbnail {
      __typename
      ... on ImageSharp {
        ImageSharp_small: gatsbyImageData(
          width: 48
          height: 48
          layout: FIXED
          transformOptions: { cropFocus: NORTH }
          placeholder: TRACED_SVG
          quality: 75
        )
        ImageSharp_regular: gatsbyImageData(
          width: 150
          height: 150
          layout: FIXED
          transformOptions: { cropFocus: NORTH }
          placeholder: TRACED_SVG
          quality: 80
        )
      }
      ... on ContentfulAsset {
        ContentfulAsset_small: gatsbyImageData(
          width: 48
          height: 48
          layout: FIXED
          cropFocus: TOP
          resizingBehavior: THUMB
          quality: 75
        )
        ContentfulAsset_regular: gatsbyImageData(
          width: 150
          height: 150
          layout: FIXED
          cropFocus: TOP
          resizingBehavior: THUMB
          quality: 80
        )
      }
      ... on SanityImageAsset {
        SanityImageAsset_small: gatsbyImageData(
          width: 48
          height: 48
          layout: FIXED
          placeholder: NONE
          fit: CLIP
        )
        SanityImageAsset_regular: gatsbyImageData(
          width: 150
          height: 150
          layout: FIXED
          placeholder: NONE
          fit: CLIP
        )
      }
    }
  }
`
