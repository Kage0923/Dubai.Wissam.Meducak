import React, { useState, useCallback } from 'react'
import loadable from '@loadable/component'
import SearchInput from './Search.Input'

const SearchComponent = loadable(() => import('./Search'))

const Search = () => {
  const [searchLoaded, setSearchLoaded] = useState()

  const loadSearchModule = useCallback(() => {
    SearchComponent.load().then(() => {
      setSearchLoaded(true)
    })
  })

  const loadSearch = useCallback(() => {
    loadSearchModule()
  })

  return searchLoaded ? (
    <SearchComponent isFocused={true} />
  ) : (
    <SearchInput loadSearch={loadSearch} />
  )
}

export default Search
