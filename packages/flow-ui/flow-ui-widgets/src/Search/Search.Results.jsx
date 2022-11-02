import React from 'react'
import groupArray from 'group-array'
import {
  Highlight,
  Snippet,
  connectStateResults,
  PoweredBy
} from 'react-instantsearch-dom'
import { Heading, Box, Spinner } from 'theme-ui'
import Card from '@components/Card'
import useScrollDisabler from '@components/useScrollDisabler'
import styles from './Search.styles'

const Hits = ({ searchState, searchResults }) => {
  useScrollDisabler()

  if (!searchResults || !searchState.query) {
    return 'What are you looking for?'
  }

  if (searchResults.query !== searchState.query) {
    //Waiting for search request to return results from server
    return <Spinner strokeWidth={2} duration={700} sx={styles.spinner} />
  }

  if (searchResults && searchResults.nbHits < 1) {
    return `No results for '${searchResults.query}'`
  } else {
    const hitsByCategory = groupArray(searchResults.hits, 'category.name')
    const categories = Object.keys(hitsByCategory)

    return categories.map(name => (
      <Box
        variant='lists.cards.fixed.search'
        sx={styles.hitGroup}
        key={`search-${name}`}
      >
        <Heading variant='h4'>{name}</Heading>
        {hitsByCategory[name].map(hit => {
          const node = {
            ...hit,
            key: hit.objectID,
            title: <Highlight hit={hit} tagName='mark' attribute='title' />,
            excerpt: <Snippet hit={hit} tagName='mark' attribute='excerpt' />
          }
          return (
            <Card
              variant='search'
              {...node}
              omitCategory
              omitFooter
              omitMedia
            />
          )
        })}
      </Box>
    ))
  }
}

const ConnectedHits = connectStateResults(Hits)

const Results = () => (
  <Box sx={styles.resultsWrapper}>
    <Box sx={styles.hitsWrapper}>
      <ConnectedHits />
    </Box>
    <Box sx={styles.poweredBy}>
      <PoweredBy />
    </Box>
  </Box>
)

export default Results
