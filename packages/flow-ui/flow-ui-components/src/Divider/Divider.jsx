import React from 'react'
import { Box } from 'theme-ui'

const Divider = ({ space, line }) => (
  <Box
    sx={{
      minWidth: `auto`,
      borderTopStyle: `solid`,
      borderTopColor: line ? `omegaLighter` : `transparent`,
      borderTopWidth: 2,
      height: 0,
      my: [space - 1, space]
    }}
  />
)

export default Divider

Divider.defaultProps = {
  space: 4,
  line: false
}
