import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Button } from 'theme-ui'
import Section from '@components/Section'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    mb: 4,
    span: {
      color: `omegaDark`
    }
  },
  running: {
    color: `omegaDark`,
    fontWeight: `body`,
    width: `5/6`
  }
}

export default () => (
  <>
    <Section>
      <Heading variant='h1' sx={styles.heading}>
        Learn React in <span>30 days</span> with great instructors!
      </Heading>
      <Heading variant='h3' sx={styles.running}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Heading>
    </Section>
    <Box variant='buttons.group' sx={styles.buttons}>
      <Button as={Link} to='/'>
        Start Learning
      </Button>
      <Button variant='white' as={Link} to='/authors'>
        View Tutors
      </Button>
    </Box>
  </>
)
