import React, { useEffect } from 'react'
import { Box, Divider } from 'theme-ui'
import Helmet from 'react-helmet'

const APP_ID = process.env.GATSBY_FACEBOOK_APP_ID

const PostCommentsFacebook = ({ siteUrl, slug }) => {
  useEffect(() => {
    window?.FB?.XFBML.parse()
  }, [])

  return (
    <Box>
      <Helmet>
        <div id='fb-root'></div>
        <script
          async={true}
          defer={true}
          crossorigin='anonymous'
          src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=${APP_ID}&autoLogAppEvents=1`}
        />
      </Helmet>
      <Divider />
      <div
        class='fb-comments'
        data-href={`${siteUrl}${slug}`}
        data-width='100%'
        data-numposts='5'
      ></div>
    </Box>
  )
}

export default PostCommentsFacebook
