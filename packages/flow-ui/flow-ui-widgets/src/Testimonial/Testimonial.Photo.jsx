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
    backgroundPosition: `bottom left`,
    overflowX: `hidden`,
    position: `absolute`,
    bottom: 0,
    left: 30,
    zIndex: 2
  })
}

export default () => {
  const data = useStaticQuery(testimonialQuery)
  const { publicURL } = (data && data.file) || {}

  if (!publicURL) return ''

  return <Box sx={styles.image(publicURL)}></Box>
}

const testimonialQuery = graphql`
  query TestimonialQuery {
    file(absolutePath: { regex: "/testimonial.(jpeg|jpg|gif|png)/" }) {
      publicURL
    }
  }
`
