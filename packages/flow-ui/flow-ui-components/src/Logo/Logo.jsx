import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { Heading } from 'theme-ui'

const styles = {
  image: {
    verticalAlign: `middle`
  },
  grayscale: {
    WebkitFilter: `grayscale(1)`,
    filter: `grayscale(1)`,
    opacity: `0.7`
  },
  title: {
    m: 0
  }
}

const Logo = ({ title, grayscale, image, to, ...props }) => (
  <Heading
    as={Link}
    to={to}
    alt={title}
    aria-label={title}
    variant='h2'
    sx={styles.title}
    {...props}
  >
    {image ? (
      <Img
        image={image}
        loading='eager'
        style={
          grayscale
            ? { ...styles.grayscale, ...styles.image }
            : { ...styles.image }
        }
        {...props}
      />
    ) : (
      title
    )}
  </Heading>
)

export default Logo

Logo.defaultProps = {
  to: '/'
}

Logo.propTypes = {
  title: PropTypes.string,
  grayscale: PropTypes.bool,
  fixed: PropTypes.object, //gatsby-transform-sharp
  to: PropTypes.string
}
