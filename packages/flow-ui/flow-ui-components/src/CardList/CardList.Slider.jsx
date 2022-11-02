import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, css, useThemeUI } from 'theme-ui'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import './CardList.Slider.css'
import styles from './CardList.Slider.Styles'

import loadable from '@loadable/component'
const Slider = loadable(() =>
  import(
    /* webpackChunkName: 'react-slick' */ /* webpackPrefetch: true */ 'react-slick'
  )
)

const CardListSlider = React.forwardRef((props, ref) => {
  const {
    columns,
    slidesToScroll,
    smoothAutoScroll,
    autoPlay,
    autoplaySpeed,
    fade,
    dots,
    arrows,
    centerMode,
    centerPadding,
    controlPosition,
    beforeChange,
    children
  } = props

  const context = useThemeUI()

  const animationSettings = {
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear'
  }

  const mobileSettings = {
    centerMode: fade ? false : true,
    centerPadding: '40px',
    swipeToSlide: true,
    arrows: false,
    dots: dots && fade ? true : false
  }

  const responsiveSettings = context.theme.breakpoints.map(
    (breakpoint, index) => {
      const rSlidesToShow =
        columns[index >= columns.length ? columns.length - 1 : index]
      const rSlidesToScroll =
        slidesToScroll[
          index >= slidesToScroll.length ? slidesToScroll.length - 1 : index
        ]
      return {
        breakpoint: parseInt(breakpoint),
        settings: {
          slidesToShow: rSlidesToShow,
          slidesToScroll: rSlidesToScroll,
          ...(index === 0 ? mobileSettings : {})
        }
      }
    }
  )
  let settings = {
    ref,
    beforeChange,
    slidesToShow: columns[columns.length - 1],
    slidesToScroll: slidesToScroll[slidesToScroll.length - 1],
    speed: 800,
    dots,
    arrows,
    centerMode,
    centerPadding,
    infinite: true,
    cssEase: fade ? 'ease-out' : 'cubic-bezier(0.23, 1, 0.32, 1)',
    fade,
    responsive: responsiveSettings,
    css: css({
      ...(fade ? styles.fade : styles.slide),
      ...(controlPosition === 'bottom' && styles.controlBottom),
      ...(controlPosition === 'center' && styles.controlCenter),
      ...(controlPosition === 'over' && styles.controlOver)
    }),
    prevArrow: (
      <IconButton sx={styles.arrowPrev}>
        <FaChevronLeft />
      </IconButton>
    ),
    nextArrow: (
      <IconButton sx={styles.arrowNext}>
        <FaChevronRight />
      </IconButton>
    )
  }

  if (smoothAutoScroll) {
    settings = {
      ...settings,
      ...animationSettings,
      speed: 10000,
      autoplaySpeed: 0,
      arrows: false,
      dots: false
    }
  }

  if (!smoothAutoScroll && autoPlay) {
    settings = {
      ...settings,
      ...animationSettings,
      speed: 300,
      autoplaySpeed
    }
  }

  const loadableFallback = children.slice(0, columns[columns.length - 1])

  return (
    <Slider {...settings} fallback={loadableFallback}>
      {children}
    </Slider>
  )
})

export default CardListSlider

CardListSlider.defaultProps = {
  fade: false,
  dots: true,
  arrows: true,
  centerMode: false,
  centerPadding: '50px',
  autoPlay: false,
  autoplaySpeed: 3000,
  smoothAutoScroll: false,
  slidesToScroll: [1],
  rows: 1,
  controlPosition: 'sides'
}

CardListSlider.propTypes = {
  fade: PropTypes.bool,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  centerMode: PropTypes.bool,
  centerPadding: PropTypes.string,
  autoPlay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  smoothAutoScroll: PropTypes.bool,
  columns: PropTypes.arrayOf(PropTypes.number),
  slidesToScroll: PropTypes.arrayOf(PropTypes.number),
  controlPosition: PropTypes.oneOf(['bottom', 'over', 'sides', 'center'])
}
