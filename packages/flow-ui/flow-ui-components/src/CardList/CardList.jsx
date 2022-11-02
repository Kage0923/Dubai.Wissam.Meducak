import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import hashCode from '@components/utils/hashCode'
import reduceArray from '@components/utils/reduceArray'
import Section from '@components/Section'
import CardListSlider from './CardList.Slider'
import Card from '@components/Card'

const SLIDER_VARIANT_GROUP = 'lists.cards.slider'
const FIXED_VARIANT_GROUP = 'lists.cards.fixed'

const CardList = React.forwardRef((props, ref) => {
  const {
    nodes,
    variant,
    title,
    withTitleLink,
    limit,
    skip,
    distinct,
    slider,
    aside,
    asNavFor,
    loading,
    ...rest
  } = props

  const reducedNodes = reduceArray(nodes, { distinct, limit, skip })
  if (!reducedNodes || !reducedNodes.length) return null

  //Section title link for viewing more posts from same category
  const titleLink = withTitleLink
    ? reducedNodes[0].category && reducedNodes[0].category.slug
    : ''

  //Unique key for section
  const sectionKey =
    title && `${hashCode(reducedNodes.map(node => node.id).join())}`

  //Build responsive variant for card list
  const cardListVariant = buildResponsiveVariant(
    slider ? SLIDER_VARIANT_GROUP : FIXED_VARIANT_GROUP,
    variant
  )

  const changeSlide = index => {
    if (asNavFor && asNavFor.current) {
      asNavFor.current.slickPause()
      asNavFor.current.slickGoTo(index)
    }
  }

  //Array of cards
  const cards = reducedNodes.map((node, index) => (
    <Card
      key={node.id}
      variant={variant}
      onMouseOver={() => changeSlide(index)}
      onFocus={() => changeSlide(index)}
      //In sliders with fade effect apply loading to the first card only
      loading={props.fade ? (index === 0 ? loading : undefined) : loading}
      {...node}
      {...rest}
    />
  ))

  //Cards List (Fixed or Slider)
  const CardList = () => (
    <Box sx={{ variant: cardListVariant }}>
      {slider ? (
        <CardListSlider
          ref={ref}
          // beforeChange={index => changeSlide(index)}
          {...rest}
        >
          {cards}
        </CardListSlider>
      ) : (
        cards
      )}
    </Box>
  )

  return title ? (
    <Section title={title} titleLink={titleLink} key={sectionKey} aside={aside}>
      <CardList />
    </Section>
  ) : (
    <CardList />
  )
})

export default CardList

CardList.defaultProps = {
  variant: 'vertical',
  columns: [1],
  aside: false
}

CardList.propTypes = {
  variant: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([
      'horizontal',
      'horizontal-aside',
      'horizontal-md',
      'horizontal-lg',
      'horizontal-cover',
      'horizontal-cover-hero',
      'horizontal-cover-wide',
      'horizontal-hero',
      'vertical-cover',
      'vertical',
      'search'
    ])
  ]),
  loading: PropTypes.oneOf(['lazy', 'auto', 'eager']),
  columns: PropTypes.array,
  title: PropTypes.string,
  withTitleLink: PropTypes.bool,
  nodes: PropTypes.array,
  distinct: PropTypes.bool,
  limit: PropTypes.number,
  skip: PropTypes.number,
  aside: PropTypes.bool
}
