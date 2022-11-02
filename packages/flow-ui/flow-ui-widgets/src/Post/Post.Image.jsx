import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { css } from 'theme-ui'
import Divider from '@components/Divider'
import getImageVariant from '@components/utils/getImageVariant'

const styles = {
  regular: {
    minHeight: `23rem`,
    img: {
      borderRadius: `lg`
    }
  },
  wide: {
    img: {
      borderRadius: `lg`
    }
  },
  inCard: {
    mt: -4,
    mx: -4,
    img: {
      borderRadius: t => `${t.radii.lg} ${t.radii.lg} 0 0`
    }
  },
  inCardLarge: {
    mt: [-4, -5],
    mx: [-4, -5],
    img: {
      borderRadius: t => `${t.radii.lg} ${t.radii.lg} 0 0`
    }
  }
}

export const PostImage = ({
  title,
  thumbnail,
  wide,
  full,
  inCard,
  inCardLarge
}) => {
  if (!thumbnail) return null

  const variant = (wide && 'wide') || (full && 'full') || 'regular'
  const image = getImageVariant(thumbnail, 'hero')

  return (
    <>
      <Img
        image={image}
        alt={title}
        css={css({
          ...styles[variant],
          ...(inCard && styles.inCard),
          ...(inCardLarge && styles.inCardLarge)
        })}
        imgStyle={
          variant === 'wide' || variant === 'full' ? styles.full : undefined
        }
      />
      <Divider space={3} />
    </>
  )
}

PostImage.propTypes = {
  wide: PropTypes.bool,
  full: PropTypes.bool,
  inCard: PropTypes.bool,
  inCardLarge: PropTypes.bool
}
