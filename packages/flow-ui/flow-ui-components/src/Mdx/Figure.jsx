import React from 'react'
import { css } from 'theme-ui'

const Figure = props => (
  <figure {...props} css={css(t => t.styles.figure)}>
    {props.children}
  </figure>
)

export default Figure
