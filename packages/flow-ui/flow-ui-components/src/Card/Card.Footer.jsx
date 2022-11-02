import React from 'react'
import { Flex } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import AuthorAvatar from './Card.Footer.Author.Avatar'
import AuthorName from './Card.Footer.Author.Name'
import Info from './Card.Footer.Info'

const styles = {
  wrapper: {
    alignItems: `center`
  },
  postInfo: {
    flex: 1,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    color: `omega`
  }
}

const CardFooter = ({ omitFooter, ...props }) =>
  !omitFooter && (
    <Flex css={styles.wrapper} sx={{ variant: rv(props.variant, 'footer') }}>
      <AuthorAvatar {...props} />
      <Flex sx={styles.postInfo}>
        <AuthorName {...props} />
        <Info {...props} />
      </Flex>
    </Flex>
  )
export default CardFooter
