import React from 'react'
import PropTypes from 'prop-types'
import { Heading, Text, Badge } from 'theme-ui'

const styles = {
  count: {
    fontSize: 4
  },
  subheader: {
    fontWeight: `body`,
    color: `omegaDark`
  },
  runninghead: {
    fontWeight: `body`,
    color: `omegaDark`,
    mb: 0
  }
}

const PageTitle = ({ header, subheader, running, totalCount }) => {
  return (
    <div>
      <Heading variant='h1' as='h1'>
        {header}{' '}
        {totalCount && (
          <Badge variant='tag-white' sx={styles.count}>
            {' '}
            {totalCount}
          </Badge>
        )}
      </Heading>
      {subheader && (
        <Text variant='h3' sx={styles.subheader}>
          {subheader}
        </Text>
      )}
      {running && (
        <Text variant='h4' sx={styles.runninghead}>
          {running}
        </Text>
      )}
    </div>
  )
}

export default PageTitle

PageTitle.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  running: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  totalCount: PropTypes.number
}
