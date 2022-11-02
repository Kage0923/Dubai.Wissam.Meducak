import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Box } from 'theme-ui'

const styles = {
  image: image => ({
    display: [`none`, null, `block`],
    height: `120%`,
    width: `1/2`,
    minWidth: 380,
    maxHeight: 514,
    borderRadius: `default`,
    backgroundImage: `url(${image})`,
    backgroundRepeat: `no-repeat`,
    // filter: `grayscale(1)`,
    overflowX: `hidden`,
    position: `absolute`,
    bottom: 0,
    right: 0,
    zIndex: 2
  })
}

export default () => {
  const data = useStaticQuery(heroQuery)
  const { publicURL } = (data && data.file) || {}

  if (!publicURL) return ''

  return <Box sx={styles.image(publicURL)}></Box>
}

const heroQuery = graphql`
  query HeroQuery {
    file(absolutePath: { regex: "/hero.(jpeg|jpg|gif|png)/" }) {
      publicURL
    }
  }
`
