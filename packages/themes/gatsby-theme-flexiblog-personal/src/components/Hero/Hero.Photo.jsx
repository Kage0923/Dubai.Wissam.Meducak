import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Box } from 'theme-ui'
import Avatar from '@components/Avatar'

const styles = {
  wrapper: {
    display: [`none`, null, `block`],
    position: `relative`,
    textAlign: `center`
  },
  pattern: {
    height: `1/2`,
    transform: `translate(0, 50%)`
  }
}

export default () => {
  const data = useStaticQuery(heroQuery)
  const image = data && data.avatar && data.avatar.childImageSharp

  return (
    <Box sx={styles.wrapper}>
      <Avatar
        avatar={image}
        withPattern
        patternStyles={styles.pattern}
        loading='eager'
      />
    </Box>
  )
}

const heroQuery = graphql`
  query HeroQuery {
    avatar: file(absolutePath: { regex: "/hero.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        regular: gatsbyImageData(
          width: 320
          height: 320
          transformOptions: { cropFocus: NORTH }
          placeholder: TRACED_SVG
        )
      }
    }
  }
`
