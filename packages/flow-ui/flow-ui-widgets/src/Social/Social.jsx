import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import attachSocialIcons from '@helpers/attachSocialIcons'

const Social = () => {
  const { social } = useSiteMetadata()

  return (
    <Section aside title="Let's Talk">
      <Card variant='paper'>
        <Text variant='p'>
          Want to find out how I can solve problems specific to your business?
          Let's talk.
        </Text>
        <Navigation items={attachSocialIcons(social)} iconOnly />
      </Card>
    </Section>
  )
}

export default Social
