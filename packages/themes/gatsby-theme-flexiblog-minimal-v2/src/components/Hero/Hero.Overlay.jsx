import React from 'react'
import { Box } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

/**
 * Shadow me to add your own content
 */

const styles = {
  image: url => ({
    width: `full`,
    height: `100vh`,
    position: `absolute`,
    zIndex: 0,
    top: -150,
    right: `15%`,
    opacity: 0.4,
    backgroundImage: `url(${url})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `top right`
  })
}

export default () => {
  const data = useStaticQuery(minimalHeaderBgQuery)
  const { publicURL } = (data && data.file) || {}

  if (!publicURL) return ''

  return <Box sx={styles.image(publicURL)}></Box>
}

const minimalHeaderBgQuery = graphql`
  query MinimalHeaderBgQuery {
    file(absolutePath: { regex: "/background.(jpeg|jpg|gif|png)/" }) {
      publicURL
    }
  }
`
