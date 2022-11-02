import React from 'react'
import { Flex, Box, Divider } from 'theme-ui'
import { PostTags, PostShare } from '@widgets/Post'

const styles = {
  flex: {
    alignItems: [`flex-start`, `center`],
    justifyContent: `space-between`,
    flexDirection: [`column`, `row`],
    '& > div + div': {
      mt: [3, 0],
      flexBasis: `1/2`,
      justifyContent: `flex-end`
    }
  }
}

export const PostTagsShare = props => (
  <Box>
    <Divider />
    <Flex sx={styles.flex}>
      <PostTags {...props} />
      <PostShare {...props} />
    </Flex>
  </Box>
)
