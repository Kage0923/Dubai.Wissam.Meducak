import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'theme-ui'
import SectionTitle from './Section.Title'

const SECTION_VARIANT = 'section'
const SIDE_SECTION_VARIANT = 'section-aside'

const Section = ({ aside, children, ...props }) => {
  const sectionVariant = aside ? SIDE_SECTION_VARIANT : SECTION_VARIANT

  return (
    <Container variant={sectionVariant}>
      <SectionTitle variant={sectionVariant} {...props} />
      {children}
    </Container>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  titleLink: PropTypes.string,
  omitTitle: PropTypes.bool,
  aside: PropTypes.bool
}
