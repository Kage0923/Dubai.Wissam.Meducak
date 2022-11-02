import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'
import { Button, Box, Heading } from 'theme-ui'

const styles = {
  button: {
    vertical: {
      variant: `cards.primary`,
      display: `flex`,
      alignItems: `center`,
      textAlign: `initial`,
      overflow: `hidden`,
      mb: 3,
      p: 0,
      pr: 2,
      svg: {
        color: `omegaDark`,
        verticalAlign: `middle`,
        size: `icon.xs`
      },
      ':hover': {
        svg: {
          color: `white`
        },
        'div:first-of-type': {
          bg: `alpha`
        }
      }
    },
    horizontal: {
      variant: `cards.interactive`,
      p: 0,
      svg: {
        color: `alpha`,
        size: `icon.sm`
      },
      ':hover': {
        svg: {
          color: `omegaDark`
        }
      }
    }
  },
  icon: {
    vertical: {
      display: [`flex`, `none`, `flex`],
      transition: `all 250ms ease`,
      alignItems: `center`,
      justifyContent: `center`,
      alignSelf: `stretch`,
      bg: `omegaLight`,
      width: 70
    },
    horizontal: {
      display: [`block`, `none`, `block`],
      boxSizing: `content-box`,
      transition: `all 250ms ease`,
      borderRadius: `bottom`,
      width: `1/3`,
      height: `icon.sm`,
      mx: `auto`,
      pt: 3
    }
  },
  text: {
    flex: `auto`,
    color: `omegaDark`,
    whiteSpace: `nowrap`,
    p: 3,
    m: 0
  }
}

export const IconButton = ({
  variant,
  name,
  Icon,
  iconPath,
  iconColor,
  to
}) => (
  <Button variant='none' as={to && Link} to={to} sx={styles.button[variant]}>
    {(Icon || iconPath) && (
      <Box sx={styles.icon[variant]}>
        {iconPath && <SVG src={iconPath} />}
        {Icon && <Icon color={iconColor} />}
      </Box>
    )}
    <Heading variant='h4' as='span' sx={styles.text}>
      {name}
    </Heading>
  </Button>
)

export default IconButton

IconButton.defaultProps = {
  variant: 'horizontal',
  number: undefined
}

IconButton.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  name: PropTypes.string,
  number: PropTypes.number,
  Icon: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  iconPath: PropTypes.string,
  to: PropTypes.string
}
