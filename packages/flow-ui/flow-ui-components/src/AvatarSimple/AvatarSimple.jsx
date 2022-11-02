import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { Box } from 'theme-ui'
import getImageVariant from '@components/utils/getImageVariant'

const styles = {
  imageWrapperSimple: {
    bg: `omegaLight`,
    display: `inline-block`,
    verticalAlign: `middle`,
    borderRadius: `full`,
    borderStyle: `solid`,
    borderWidth: `md`,
    borderColor: `omegaLight`,
    overFlow: `hidden`,
    opacity: 0.9,
    mr: 3,
    img: {
      borderRadius: `full`
    },
    ':hover': {
      opacity: 1
    },
    '> div': {
      borderRadius: `full`
    }
  }
}

const AvatarSimple = ({ avatar, size, alt }) => {
  const image = avatar && getImageVariant(avatar, size)

  if (!image) return null

  return (
    <Box sx={styles.imageWrapperSimple}>
      <Img image={image} alt={alt} />
    </Box>
  )
}

export default AvatarSimple

AvatarSimple.defaultProps = {
  size: 'regular'
}

AvatarSimple.propTypes = {
  size: PropTypes.oneOf([false, 'small', 'regular']),
  loading: PropTypes.string,
  alt: PropTypes.string
}
