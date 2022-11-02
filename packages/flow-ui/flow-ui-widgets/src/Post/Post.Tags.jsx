import React from 'react'
import { Link } from 'gatsby'
import { Badge, Heading, Flex, Box } from 'theme-ui'

const styles = {
  wrapper: {
    alignItems: `center`
  },
  heading: {
    color: `omegaDark`,
    mr: 3,
    mb: 0
  }
}

export const PostTags = ({ tags }) =>
  tags && tags.length > 0 ? (
    <Flex sx={styles.wrapper}>
      <Heading variant='h5' sx={styles.heading}>
        Tags
      </Heading>
      <Box variant='lists.badges'>
        {tags.map(({ id, name, slug }) => (
          <Badge variant='tag' key={id} as={Link} to={slug}>
            {name}
          </Badge>
        ))}
      </Box>
    </Flex>
  ) : null
