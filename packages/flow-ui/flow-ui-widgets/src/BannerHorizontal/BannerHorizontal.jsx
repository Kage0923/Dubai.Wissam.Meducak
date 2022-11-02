import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Flex, Box, Button, Heading, Text } from 'theme-ui'

const styles = {
  wrapper: src => ({
    alignItems: `center`,
    flexDirection: [`column`, `row`],
    bg: `omegaDarker`,
    backgroundImage: src && [`none`, `none`, `url(${src})`],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `70% bottom`,
    borderRadius: `default`,
    width: `full`,
    p: 4
  }),
  left: {
    flexBasis: `2/3`
  },
  right: {
    flexBasis: `1/3`,
    textAlign: `right`
  },
  heading: {
    color: `betaLight`,
    fontWeight: `normal`
  },
  subheading: {
    color: `omega`,
    mb: [3, 0]
  }
}

const BannerHorizontal = () => {
  const data = useStaticQuery(bannerHorizontalQuery)
  const { file } = data

  const banner = file && file.banner && file.banner.regular

  return (
    <Flex sx={styles.wrapper(banner && banner.src)}>
      <Box sx={styles.left}>
        <Heading variant='h3' sx={styles.heading}>
          The latest IT market analysis report - May 2020
        </Heading>
        <Text sx={styles.subheading}>This month's analysis is a must see.</Text>
      </Box>
      <Box sx={styles.right}>
        <Button as={Link} to='/' variant='primary' aria-label='Download Report'>
          Download Report
        </Button>
      </Box>
    </Flex>
  )
}

const bannerHorizontalQuery = graphql`
  query BannerHorizontalQuery {
    file(absolutePath: { regex: "/banner.(jpeg|jpg|gif|png)/" }) {
      banner: childImageSharp {
        regular: resize(width: 300, height: 150, cropFocus: CENTER) {
          src
        }
      }
    }
  }
`

export default BannerHorizontal
