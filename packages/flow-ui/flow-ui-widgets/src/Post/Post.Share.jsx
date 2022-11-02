import React from 'react'
import { IconButton, Heading, Flex } from 'theme-ui'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton
} from 'react-share'
import attachSocialIcons from '@helpers/attachSocialIcons'

const styles = {
  wrapper: {
    alignItems: `center`
  },
  heading: {
    color: `omegaDark`,
    mr: 1,
    mb: 0
  }
}

const PostShare = ({ location, title }) => {
  const url = location && location.href

  const Facebook = ({ children }) => (
    <FacebookShareButton url={url} quote={title}>
      {children}
    </FacebookShareButton>
  )

  const Twitter = ({ children }) => (
    <TwitterShareButton url={url} title={title}>
      {children}
    </TwitterShareButton>
  )

  const Linkedin = ({ children }) => (
    <LinkedinShareButton url={url} quote={title}>
      {children}
    </LinkedinShareButton>
  )

  const Email = ({ children }) => (
    <EmailShareButton url={url} subject={title}>
      {children}
    </EmailShareButton>
  )

  const buttons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    email: Email
  }

  const buttonsWithIcons = attachSocialIcons(
    Object.keys(buttons).map(s => ({ name: s }))
  )

  return (
    <Flex sx={styles.wrapper}>
      <Heading variant='h5' sx={styles.heading}>
        Share
      </Heading>
      {buttonsWithIcons.map(({ name, color, Icon }) => {
        const ShareButton = buttons[name]
        return (
          ShareButton && (
            <IconButton
              as='span'
              variant='simple'
              key={`share-${name}`}
              sx={{ color }}
            >
              <ShareButton>
                <Icon />
              </ShareButton>
            </IconButton>
          )
        )
      })}
    </Flex>
  )
}

export default PostShare
