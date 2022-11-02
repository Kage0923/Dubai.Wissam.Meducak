import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Our Commitment' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        We take our commitment to our users seriously. If you need our help with
        your project, have questions about how to use the site or are
        experiencing any technical difficulties, please do not hesitate to
        contact us.
      </Text>
    </Card>
  </Section>
)

export default Commitment
