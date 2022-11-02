import React from 'react'
import { css } from 'theme-ui'
import { Link } from 'theme-ui'
import { FaLink } from 'react-icons/fa'

const styles = {
  heading: {
    svg: {
      visibility: `hidden`,
      size: `icon.xs`,
      position: `absolute`,
      top: `50%`,
      transform: `translate(0,-50%)`,
      pl: 2
    },
    ':hover svg': {
      visibility: `visible`
    },
    pointerEvents: `painted`
  },
  link: {
    position: `relative`
  }
}

const heading = Tag => props => (
  <Tag {...props} css={css(styles.heading)}>
    <Link href={`#${props.id}`} variant={`text.${Tag}`} sx={styles.link}>
      {props.children}
      <FaLink />
    </Link>
  </Tag>
)

export default {
  h1: heading(`h1`),
  h2: heading(`h2`),
  h3: heading(`h3`)
}
