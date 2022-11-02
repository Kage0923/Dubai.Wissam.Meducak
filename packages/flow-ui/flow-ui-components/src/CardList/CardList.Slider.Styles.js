export default {
  slide: {
    width: `full`,
    '.slick-slide': {
      transition: `all 600ms ease`,
      opacity: 1,
      transform: [null, `scale(1)`],
      transformOrigin: `left`
    },
    '.slick-slide.slick-active + :not(.slick-active)': {
      opacity: [null, 0],
      transform: [null, `scale(0.7)`]
    },
    '.slick-track': {
      left: `0 !important`
    }
  },
  fade: {
    width: `full`,
    '.slick-slide:not(.slick-active)': {
      left: `-9999px !important` //fix overlapping slides in fade mode
    },
    '.slick-track': {
      display: `flex`,
      alignItems: `center`,
      left: `0 !important`
    }
  },
  controlBottom: {
    '.slick-prev, .slick-next': {
      top: `auto`,
      bottom: 3,
      left: `50%`,
      transform: `translate(-125%, 0)`
    },
    '.slick-next': {
      ml: 5
    },
    '.slick-dots': {
      textAlign: `center`,
      width: [`full`, `auto`],
      top: [`100%`, `auto`],
      bottom: 0
    },
    '.slick-dots li': {
      verticalAlign: `middle`
    }
  },
  controlCenter: {
    '.slick-prev, .slick-next': {
      top: `50%`,
      left: `50%`,
      transform: `translate(-125%, -50%)`
    },
    '.slick-next': {
      ml: 5
    },
    '.slick-dots': {
      textAlign: `center`,
      width: [`full`, `auto`],
      top: [`100%`, `auto`],
      bottom: 4,
      right: 4
    }
  },
  controlOver: {
    width: `full`,
    '.slick-prev, .slick-next': {
      top: `auto`,
      bottom: [-2, 3],
      left: [4, 6]
    },
    '.slick-next': {
      ml: 5
    },
    '.slick-dots': {
      textAlign: `center`,
      width: `auto`,
      top: [`auto`, 5],
      bottom: [3, `auto`],
      left: [2, 4],
      p: 0,
      ml: 3
    },
    '.slick-dots li': {
      display: [`inline-block`, `block`]
    },
    '.slick-dots li.slick-active button': {
      bg: `alpha`
    }
  }
}
