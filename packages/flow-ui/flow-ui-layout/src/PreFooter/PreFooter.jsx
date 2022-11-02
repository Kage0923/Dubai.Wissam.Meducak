import React from 'react'
import { Container } from 'theme-ui'

export const PreFooter = ({ children, ...props }) => (
  <Container variant='compact' {...props}>
    {children}
  </Container>
)
