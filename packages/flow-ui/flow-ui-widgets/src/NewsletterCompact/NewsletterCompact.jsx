import React from 'react'
import { Card, Text } from 'theme-ui'
import NewsletterForm from '@components/NewsletterForm'
import Section from '@components/Section'
import useMailChimp from '@helpers/useMailChimp'

const NewsletterCompact = props => {
  const {
    handleSubmit,
    canSubmit,
    submitting,
    message,
    success
  } = useMailChimp()

  return (
    <Section aside title='Newsletter' {...props}>
      <Card variant='paper'>
        <Text variant='p'>
          Make sure to subscribe to our newsletter and be the first to know the
          news.
        </Text>
        <NewsletterForm
          {...{ handleSubmit, canSubmit, submitting, message, success }}
        />
      </Card>
    </Section>
  )
}

export default NewsletterCompact
