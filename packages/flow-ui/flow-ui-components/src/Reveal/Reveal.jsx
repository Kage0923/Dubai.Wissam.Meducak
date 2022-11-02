import React from 'react'
import PropTypes from 'prop-types'
import ReactReveal from 'react-reveal/Reveal'
import './Reveal.styles.css'

/**
 * react-reveal props:
 * https://www.react-reveal.com/docs/props/
 */

const Reveal = ({ effect, children, ...props }) => (
  <ReactReveal
    duration={750}
    effect={props.collapse ? null : effect}
    {...props}
  >
    {children}
  </ReactReveal>
)

export default Reveal

Reveal.defaultProps = {
  effect: 'fadeInUp'
}

Reveal.propTypes = {
  effect: PropTypes.oneOf([
    'fadeIn',
    'fadeInUp',
    'fadeInDown',
    'fadeInRight',
    'fadeInLeft'
  ])
}
