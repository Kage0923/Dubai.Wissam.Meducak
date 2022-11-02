import React from 'react'
import { Container } from 'theme-ui'

export const Sidebar = ({ children, ...props }) => (
  <Container variant='sidebar' {...props}>
    {children}
  </Container>
)
