import React from 'react'
import PropTypes from 'prop-types'
import { Box, Input, Button, Message, Spinner } from 'theme-ui'

const styles = {
  msg: {
    mb: 0
  },
  button: {
    display: `block`,
    mx: `auto`
  }
}

const NewsletterForm = ({
  handleSubmit,
  canSubmit,
  submitting,
  message,
  success
}) => (
  <form onSubmit={handleSubmit}>
    {message && (
      <Message
        variant={success ? 'success' : 'error'}
        sx={styles.msg}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    )}
    {canSubmit && (
      <>
        <Box variant='forms.row'>
          <Input
            name='email'
            type='email'
            placeholder='Email Address'
            aria-label='Email Address'
            required
          />
        </Box>
        <Button
          type='submit'
          variant={success || submitting ? 'disabled' : 'primary'}
          disabled={success || submitting}
          sx={styles.button}
        >
          Subscribe {submitting && <Spinner size='20' />}
        </Button>
      </>
    )}
  </form>
)

export default NewsletterForm

NewsletterForm.propTypes = {
  handleSubmit: PropTypes.func,
  canSubmit: PropTypes.bool,
  submitting: PropTypes.bool,
  message: PropTypes.string,
  success: PropTypes.bool
}
