import React from 'react'
import { Heading } from 'theme-ui'
import Divider from '@components/Divider'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    background: t => `
      linear-gradient(
        45deg,
        ${t.colors.alpha} 32.5%,
        ${t.colors.betaDark} 50.5%)
    `,
    color: `beta`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    fontWeight: `bold`
  },
  running: {
    color: `omegaDark`,
    fontWeight: `normal`,
    maxWidth: [`full`, null, `2/3`]
  }
}

export default () => (
  <>
    <Divider space={3} />
    <Heading variant='h1' sx={styles.heading}>
      Learn new skills from
      <br />
      The best internet marketers
    </Heading>
    <Divider space={3} />
    <Heading variant='h3' sx={styles.running}>
      Too many businesses are already generating all the leads and prospects
      they need but are unwittingly losing up to 95% of their sales
      opportunities. We write about the strategies you can use to convert those
      leads.
    </Heading>
  </>
)
