import React from 'react'
import { Card, Box } from 'theme-ui'
import Section from '@components/Section'

const styles = {
  wrapper: {
    display: `flex`,
    alignItems: `flex-end`,
    position: `relative`,
    mt: [0, null, 5]
  },
  leftColumn: {
    flexBasis: `2/3`,
    flex: 1,
    position: `relative`,
    zIndex: 3
  },
  rightColumn: {
    display: [`none`, null, `block`],
    flexBasis: `1/3`
  }
}

const LeftColumn = ({ children }) => (
  <Box sx={styles.leftColumn}>{children}</Box>
)

const RightColumn = ({ children }) => (
  <Box sx={styles.rightColumn}>{children}</Box>
)

const Wrapper = ({ children }) => (
  <Section>
    <Card variant='paper-lg' sx={styles.wrapper}>
      {children}
    </Card>
  </Section>
)

export default {
  Wrapper,
  LeftColumn,
  RightColumn
}
