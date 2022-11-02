import React from 'react'
import { useColorMode } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Logo from '@components/Logo'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

export const HeaderLogo = ({ ...props }) => {
  const { title } = useSiteMetadata()

  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const { logo, logoDark } = useStaticQuery(logoQuery)

  const logoNormal = getImage(logo)
  const LogoDark = getImage(logoDark)

  if (!logoNormal) return null

  return isDark && LogoDark ? (
    <Logo image={LogoDark} title={title} alt={title} {...props} />
  ) : (
    <Logo image={logoNormal} title={title} alt={title} {...props} />
  )
}

const logoQuery = graphql`
  query LogoQuery {
    logo: file(
      absolutePath: { regex: "/logo.(jpeg|jpg|gif|png)/" }
      sourceInstanceName: { eq: "asset" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          layout: CONSTRAINED
          quality: 100
          placeholder: NONE
        )
      }
    }
    logoDark: file(
      absolutePath: { regex: "/logo-dark.(jpeg|jpg|gif|png)/" }
      sourceInstanceName: { eq: "asset" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          layout: CONSTRAINED
          quality: 100
          placeholder: NONE
        )
      }
    }
  }
`
