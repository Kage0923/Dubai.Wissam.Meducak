import React from 'react'
import { Box } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import CardBodyCategory from './Card.Body.Category'
import CardBodyTitle from './Card.Body.Title'
import CardBodyExcerpt from './Card.Body.Excerpt'

const styles = {
  body: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    flex: 1
  }
}

const CardBody = ({ children, omitBody, ...props }) =>
  !omitBody && (
    <Box
      sx={{
        ...styles.body,
        variant: rv(props.variant, 'body')
      }}
    >
      <CardBodyCategory {...props} />
      <CardBodyTitle {...props} />
      <CardBodyExcerpt {...props} />
      {children}
    </Box>
  )

export default CardBody
