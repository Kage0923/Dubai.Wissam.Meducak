import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { Box, css } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'
import getImageVariant from '@components/utils/getImageVariant'

//Base size to keep all layers aligned easier
const bs = x => `${x * 0.35}rem`

const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 2,
    textAlign: `center`,
    mb: bs(3)
  },
  pattern: {
    backgroundSize: `8rem`,
    opacity: 0.15
  },
  circle: ({ width }) => ({
    width: [bs(30), `full`],
    height: `full`,
    maxWidth: width,
    borderRadius: `full`,
    position: `absolute`,
    transform: `translate(-50%)  scale(0.98)`,
    left: `50%`,
    top: bs(3),
    bg: `alpha`
  }),
  arc: ({ width }) => ({
    width: [bs(30), `full`],
    height: `full`,
    maxWidth: width,
    borderRadius: `full`,
    position: `absolute`,
    zIndex: 2,
    left: `50%`,
    transform: `translate(-50%)`,
    mt: bs(-1),
    ml: bs(-2),
    boxShadow: t => `
			${bs(2)}
			${bs(4)}
			${t.colors.omegaLight}
		`
  }),
  imageWrapper: {
    mx: `auto`,
    img: {
      borderRadius: `0 0 9999px 9999px`
    }
  }
}

const Avatar = ({
  avatar,
  withPattern,
  patternStyles = {},
  size,
  width,
  loading,
  alt
}) => {
  const image = avatar && getImageVariant(avatar, size)

  if (!image) return null

  width = width || image.width

  return (
    <Box sx={styles.wrapper}>
      <Box>
        {withPattern && (
          <MemphisPattern sx={{ ...styles.pattern, ...patternStyles }} />
        )}
        <Box sx={styles.circle({ width })}></Box>
        <Box sx={styles.arc({ width })}></Box>
        <Img
          image={image}
          alt={alt}
          loading={loading}
          css={css(styles.imageWrapper)}
        />
      </Box>
    </Box>
  )
}

export default Avatar

Avatar.defaultProps = {
  size: 'regular',
  withPattern: false
}

Avatar.propTypes = {
  size: PropTypes.oneOf([false, 'small', 'regular']),
  width: PropTypes.number,
  withPattern: PropTypes.bool,
  patternStyles: PropTypes.object,
  loading: PropTypes.string,
  alt: PropTypes.string
}
