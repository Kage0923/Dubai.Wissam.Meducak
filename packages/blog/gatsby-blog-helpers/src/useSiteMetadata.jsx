import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(siteMetadataQuery)
  return site.siteMetadata
}

const siteMetadataQuery = graphql`
  query BlogSiteMetadataQuery {
    site {
      ...BlogSiteMetadata
    }
  }
`
export default useSiteMetadata
