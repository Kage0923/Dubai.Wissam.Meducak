import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const styles = {
  wrapper: separator => ({
    '> *': {
      ':not(:last-child) + *:before': {
        content: `" ${separator} "`
      }
    }
  }),
  nowrap: {
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`
  }
}

const TextList = ({ nowrap, separator, children }) => (
  <Box sx={{ ...(nowrap && styles.nowrap), ...styles.wrapper(separator) }}>
    {children}
  </Box>
)

export default TextList

TextList.defaultProps = {
  separator: '・',
  nowrap: false
}

TextList.propTypes = {
  separator: PropTypes.string,
  nowrap: PropTypes.bool
}
