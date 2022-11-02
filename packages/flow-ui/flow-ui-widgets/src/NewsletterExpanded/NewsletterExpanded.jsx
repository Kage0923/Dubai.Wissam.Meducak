import React from 'react'
import { css } from 'theme-ui'
import { Card, Text, Heading, Box } from 'theme-ui'
import NewsletterForm from '@components/NewsletterForm'
import useMailChimp from '@helpers/useMailChimp'
import { FaRegPaperPlane, FaWind } from 'react-icons/fa'

const styles = {
  card: {
    position: `relative`
  },
  wrapper: {
    maxWidth: 500,
    textAlign: `center`,
    mx: `auto`,
    py: 3
  },
  icons: {
    display: [`none`, null, `block`],
    position: `absolute`,
    top: `-3rem`,
    left: `5rem`,
    svg: {
      display: `block`
    }
  },
  plane: {
    fontSize: `9rem`,
    color: `beta`
  },
  wind: {
    fontSize: `7rem`,
    color: `omegaLight`,
    transform: `rotate(120deg)`,
    mt: `0.5rem`,
    ml: `-3rem`
  },
  form: {
    maxWidth: 300,
    mx: `auto`,
    mt: 4
  }
}

const NewsletterExpanded = ({ simple }) => {
  const {
    handleSubmit,
    canSubmit,
    submitting,
    message,
    success
  } = useMailChimp()

  return (
    <Card variant='paper' sx={styles.card}>
      <Box sx={styles.wrapper}>
        {!simple && (
          <Box sx={styles.icons}>
            <FaRegPaperPlane css={css(styles.plane)} />
            <FaWind css={css(styles.wind)} />
          </Box>
        )}
        <Heading variant='h2'>Subscribe to our newsletter!</Heading>
        <Text variant='p'>
          We'll send you the best of our blog just once a month. We promise.
        </Text>
        <Box sx={styles.form}>
          <NewsletterForm
            {...{
              handleSubmit,
              canSubmit,
              submitting,
              message,
              success
            }}
          />
        </Box>
      </Box>
    </Card>
  )
}

NewsletterExpanded.defaultProps = {
  simple: false
}

export default NewsletterExpanded
