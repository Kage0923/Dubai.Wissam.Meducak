import React from 'react'
import { css } from 'theme-ui'

const Figcaption = props => (
  <figcaption {...props} css={css(t => t.styles.figcaption)}>
    {props.children}
  </figcaption>
)

export default Figcaption
