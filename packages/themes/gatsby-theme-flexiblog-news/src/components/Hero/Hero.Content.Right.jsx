import React from 'react'
import { Box, Heading } from 'theme-ui'

/**
 * Shadow me to add your own content
 */

const styles = {
  box: {
    borderLeft: `5px solid`,
    borderLeftColor: `omegaLighter`,
    pl: 5,
    py: 2,
    my: 5
  },
  quote: {
    color: `omegaDark`,
    fontWeight: `body`
  },
  writer: {
    color: `omegaDark`,
    mb: 0
  }
}

export default () => (
  <Box sx={styles.box}>
    <Heading variant='h3' sx={styles.quote}>
      “While one person hesitates because he feels inferior, the other is busy
      making mistakes and becoming superior.”
    </Heading>
    <Heading variant='h4' sx={styles.writer}>
      Henry C. Link
    </Heading>
  </Box>
)
