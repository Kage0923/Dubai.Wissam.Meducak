import React from 'react'
import { Container } from 'theme-ui'

export const Main = ({ children, ...props }) => (
  <Container variant='main' {...props}>
    {children}
  </Container>
)
