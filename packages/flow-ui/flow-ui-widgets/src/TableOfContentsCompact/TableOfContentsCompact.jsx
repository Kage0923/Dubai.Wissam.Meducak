import React from 'react'
import { Link as GLink } from 'gatsby'
import { Flex, Card, Link, Text, Heading } from 'theme-ui'
import Section from '@components/Section'

const styles = {
  item: {
    display: `block`,
    '& + &': { mt: 3 }
  },
  number: {
    color: 'alpha',
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    bg: `omegaLighter`,
    borderRadius: `full`,
    size: 25,
    mr: 2,
    mb: 0
  },
  text: {
    flex: `1`,
    lineHeight: `heading`,
    mb: 0
  }
}
const TableOfContentsCompact = ({ tableOfContents: { items = [] } }) =>
  items.length > 1 ? (
    <Section aside title='Table Of Contents'>
      <Card variant='paper'>
        {items.map((item, index) => (
          <Link
            key={`item-${index}`}
            as={GLink}
            to={item.url}
            variant='vertical'
            sx={styles.item}
          >
            <Flex sx={{ alignItems: `baseline` }}>
              <Heading variant='h5' as='div' sx={styles.number}>
                {index + 1}
              </Heading>
              <Text sx={styles.text}>{item.title}</Text>
            </Flex>
          </Link>
        ))}
      </Card>
    </Section>
  ) : null

export default TableOfContentsCompact
