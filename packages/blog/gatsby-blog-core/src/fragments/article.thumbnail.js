import { graphql } from 'gatsby'

export const query = graphql`
  fragment ArticleThumbnailRegular on Article {
    thumbnail {
      __typename
      ... on ImageSharp {
        ImageSharp_vertical: gatsbyImageData(
          width: 380
          height: 290
          transformOptions: { cropFocus: CENTER }
          outputPixelDensities: [0.5, 1]
          quality: $imageQuality
        )
        ImageSharp_hero: gatsbyImageData(
          width: 1600
          height: 650
          transformOptions: { cropFocus: CENTER }
          outputPixelDensities: [0.5, 1]
          quality: $imageQuality
        )
      }
      ... on ContentfulAsset {
        ContentfulAsset_vertical: gatsbyImageData(
          width: 380
          height: 290
          cropFocus: CENTER
          formats: [JPG, WEBP]
          quality: $imageQuality
          resizingBehavior: THUMB
        )
        ContentfulAsset_hero: gatsbyImageData(
          width: 1600
          height: 650
          formats: [JPG, WEBP]
          quality: $imageQuality
          resizingBehavior: THUMB
        )
      }
      ... on SanityImageAsset {
        SanityImageAsset_vertical: gatsbyImageData(
          width: 380
          height: 290
          outputPixelDensities: [0.5, 1]
        )
        SanityImageAsset_hero: gatsbyImageData(
          width: 1600
          height: 650
          outputPixelDensities: [0.5, 1]
        )
      }
    }
  }
  fragment ArticleThumbnailFeatured on Article {
    thumbnail {
      __typename
      ... on ImageSharp {
        ImageSharp_vertical: gatsbyImageData(
          width: 360
          height: 470
          transformOptions: { cropFocus: CENTER }
          outputPixelDensities: [0.5, 1]
          quality: $imageQuality
        )
        ImageSharp_horizontal: gatsbyImageData(
          width: 807
          height: 400
          transformOptions: { cropFocus: CENTER }
          outputPixelDensities: [0.5, 1]
          quality: $imageQuality
        )
        ImageSharp_hero: gatsbyImageData(
          width: 1600
          height: 650
          transformOptions: { cropFocus: CENTER }
          outputPixelDensities: [0.5, 1]
          quality: $imageQuality
        )
      }
      ... on ContentfulAsset {
        ContentfulAsset_vertical: gatsbyImageData(
          width: 360
          height: 470
          cropFocus: CENTER
          formats: [JPG, WEBP]
          quality: $imageQuality
          resizingBehavior: THUMB
        )
        ContentfulAsset_horizontal: gatsbyImageData(
          width: 807
          height: 400
          cropFocus: CENTER
          formats: [JPG, WEBP]
          quality: $imageQuality
          resizingBehavior: THUMB
        )
        ContentfulAsset_hero: gatsbyImageData(
          width: 1600
          height: 650
          formats: [JPG, WEBP]
          quality: $imageQuality
          resizingBehavior: THUMB
        )
      }
      ... on SanityImageAsset {
        SanityImageAsset_vertical: gatsbyImageData(
          width: 360
          height: 470
          outputPixelDensities: [0.5, 1]
        )
        SanityImageAsset_horizontal: gatsbyImageData(
          width: 807
          height: 400
          outputPixelDensities: [0.5, 1]
        )
        SanityImageAsset_hero: gatsbyImageData(
          width: 1600
          height: 650
          outputPixelDensities: [0.5, 1]
        )
      }
    }
  }
`
