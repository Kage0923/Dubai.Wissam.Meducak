import React from 'react'
import { Link } from 'gatsby'
import { Heading, Badge, Flex } from 'theme-ui'
import Divider from '@components/Divider'

const styles = {
  wrapper: {
    justifyContent: `space-between`,
    alignItems: `end`
  },
  //Section title
  section: {
    position: `relative`,
    pl: [0, 4],
    mx: [`auto`, 0],
    mb: 0,
    '::before': {
      display: [`none`, `block`],
      bg: `omegaLight`,
      content: `""`,
      borderRadius: `full`,
      position: `absolute`,
      height: `full`,
      width: 5,
      top: 0,
      left: 0
    }
  },
  //Section aside title
  'section-aside': {
    color: `omegaDark`,
    mx: `auto`,
    mb: 0
  },
  badge: {
    display: [`none`, `block`],
    mb: 0
  }
}

const SectionTitle = ({ title, titleLink, omitTitle, variant }) => {
  const linkProps = titleLink && {
    as: Link,
    to: titleLink
  }

  return !omitTitle && (title || titleLink) ? (
    <>
      <Flex sx={styles.wrapper}>
        {title && (
          <Heading variant='h2' sx={styles[variant]} {...linkProps}>
            {title}
          </Heading>
        )}
        {titleLink && (
          <Badge variant='tag' sx={styles.badge} {...linkProps}>
            View More
          </Badge>
        )}
      </Flex>
      <Divider />
    </>
  ) : null
}

export default SectionTitle
