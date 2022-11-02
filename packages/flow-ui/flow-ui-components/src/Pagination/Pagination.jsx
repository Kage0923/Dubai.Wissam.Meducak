import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Button, Flex, Box } from 'theme-ui'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import normalizeSlug from '@components/utils/normalizeSlug'

const pagingParam = 'page'

const styles = {
  wrapper: {
    justifyContent: `space-between`,
    alignItems: `center`,
    textAlign: `center`,
    borderRadius: `full`,
    bg: `contentBg`,
    maxWidth: [`none`, 500],
    mx: `auto`,
    p: 1
  },
  item: {
    width: `1/3`
  },
  number: {
    py: 2
  },
  button: {
    minWidth: `full`
  }
}

const Pagination = ({
  currentPage,
  pageCount,
  hasPreviousPage,
  hasNextPage,
  basePath = '',
  slug = ''
}) => {
  if (!hasNextPage && !hasPreviousPage) return ''
  let prefixPath = normalizeSlug(basePath + slug)
  let pagingPath = normalizeSlug(prefixPath + pagingParam)

  const prevLink =
    currentPage >= 3 ? `${pagingPath}${currentPage - 1}` : prefixPath
  const nextLink = `${pagingPath}${currentPage + 1}`

  return (
    <Flex sx={styles.wrapper}>
      <Box sx={styles.item}>
        {hasPreviousPage && (
          <Button variant='mute' as={Link} to={prevLink} sx={styles.button}>
            <FaChevronLeft />
            Previous
          </Button>
        )}
      </Box>
      <Box sx={{ ...styles.item, ...styles.number }}>
        Page <strong>{currentPage}</strong> of <strong>{pageCount}</strong>
      </Box>
      <Box sx={styles.item}>
        {hasNextPage && (
          <Button variant='dark' as={Link} to={nextLink} sx={styles.button}>
            Next
            <FaChevronRight />
          </Button>
        )}
      </Box>
    </Flex>
  )
}

export default Pagination

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  hasPreviousPage: PropTypes.bool,
  hasNextPage: PropTypes.bool,
  slug: PropTypes.string,
  pagingParam: PropTypes.string
}
