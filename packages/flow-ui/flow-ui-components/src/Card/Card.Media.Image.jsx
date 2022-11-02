import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { css } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'

const CardMediaImage = ({ variant, loading, image, title }) => (
  <Img
    image={image}
    loading={loading}
    alt={title}
    css={css({
      height: `full`,
      verticalAlign: `middle`, //avoid baseline gap
      img: {
        bg: `omegaLighter`
      },
      variant: rv(variant, 'image')
    })}
  />
)
CardMediaImage.defaultProps = {
  loading: 'lazy'
}

export default CardMediaImage
