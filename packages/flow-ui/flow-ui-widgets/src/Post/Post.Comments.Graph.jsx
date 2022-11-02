import React, { useEffect } from 'react'
import { Box, Divider } from 'theme-ui'

const SITE_ID = process.env.GATSBY_GRAPHCOMMENT_SITE_ID
const COMMENTS_ID = 'graphcomment'

const PostCommentsGraph = ({ id }) => {
  useEffect(() => {
    window.gc_params = {
      graphcomment_id: SITE_ID,
      fixed_header_height: 0,
      behaviour: {
        uid: id
      }
    }

    const script = document.createElement('script')
    script.src = 'https://graphcomment.com/js/integration.js?' + Date.now()
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [])

  return (
    <Box>
      <Divider />
      <div id={COMMENTS_ID} />
    </Box>
  )
}

export default PostCommentsGraph
