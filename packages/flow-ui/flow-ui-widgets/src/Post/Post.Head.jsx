import React from 'react'
import { Link as GLink } from 'gatsby'
import { Link, Text } from 'theme-ui'
import TextList from '@components/TextList'
import PageTitle from '@components/PageTitle'

const styles = {
  item: {
    display: `inline-block`
  }
}

export const PostHead = ({ title, author, date, timeToRead, category }) => {
  const info = (
    <TextList>
      {author && author.slug && (
        <Text sx={styles.item}>
          {`By `}
          <Link variant='mute' as={GLink} to={author.slug}>
            <strong>{author.name}</strong>
          </Link>
        </Text>
      )}
      {category && category.slug && (
        <Text sx={styles.item}>
          {`Published in `}
          <Link variant='mute' as={GLink} to={category.slug}>
            <strong>{category.name}</strong>
          </Link>
        </Text>
      )}
      {date && <Text sx={styles.item}>{date}</Text>}
      {timeToRead && (
        <Text sx={{ ...styles.item, color: `error` }}>
          <strong>{timeToRead} min read</strong>
        </Text>
      )}
    </TextList>
  )

  return <PageTitle header={title} running={info} />
}
