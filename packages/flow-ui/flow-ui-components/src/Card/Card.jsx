import React from 'react'
import PropTypes from 'prop-types'
import rv from '@components/utils/buildResponsiveVariant'
import Base from './Card.Base'

const Card = ({ variantGroup, variant, aside, ...props }) => {
  const responsiveVariant = rv(variantGroup, variant)
  return <Base variant={responsiveVariant} {...props} />
}

export default Card

Card.defaultProps = {
  variantGroup: 'cards',
  variant: 'vertical'
}

Card.propTypes = {
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
  omitMedia: PropTypes.bool,
  omitCategory: PropTypes.bool,
  omitExcerpt: PropTypes.bool,
  omitAuthor: PropTypes.bool,
  omitBody: PropTypes.bool,
  omitFooter: PropTypes.bool,
  aside: PropTypes.bool,
  columns: PropTypes.array,
  mediaType: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['icon', 'image'])
  ]),
  imageVariant: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'auto', 'eager']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  slug: PropTypes.string,
  link: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    slug: PropTypes.string,
    icon: PropTypes.string
  }),
  author: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    thumbnail: PropTypes.object
  }),
  date: PropTypes.string,
  timeToRead: PropTypes.number,
  excerpt: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  thumbnail: PropTypes.object,
  thumbnailText: PropTypes.string
}
