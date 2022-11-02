import React from 'react'
import { Box, Divider } from 'theme-ui'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostComments = ({ title, id }) => {
  let disqusConfig = {
    identifier: id,
    title: title
  }
  return (
    <Box>
      <Divider />
      <CommentCount config={disqusConfig} placeholder='' />
      <Disqus config={disqusConfig} />
    </Box>
  )
}

export default PostComments
