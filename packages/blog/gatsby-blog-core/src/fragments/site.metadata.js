import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlogSiteMetadata on Site {
    siteMetadata {
      title
      name
      description
      address
      email
      phone
      headerMenu {
        name
        slug
      }
      footerMenu {
        title
        items {
          name
          slug
        }
      }
      social {
        name
        url
      }
    }
  }
`
