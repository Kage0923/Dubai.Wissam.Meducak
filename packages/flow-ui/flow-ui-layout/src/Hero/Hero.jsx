import React from 'react'
import { Container, Box } from 'theme-ui'

const styles = {
  wrapper: {
    position: `relative`
  }
}

export const Hero = ({ children, sx, wide, full, ...props }) => (
  <Box sx={{ ...styles.wrapper, ...sx }} {...props}>
    <Container variant={(wide && 'wide') || (full && 'full') || 'compact'}>
      {children}
    </Container>
  </Box>
)
