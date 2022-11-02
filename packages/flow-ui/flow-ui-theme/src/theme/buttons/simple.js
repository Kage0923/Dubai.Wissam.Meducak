import common from './common'

export default {
  ...common.button,
  minWidth: `auto`,
  boxSizing: `initial`,
  display: `inline-block`,
  color: `omega`,
  borderColor: `transparent`,
  verticalAlign: `middle`,
  size: 24,
  p: 2,
  '+a, + button': {
    ml: 2
  },
  svg: {
    size: 24
  },
  '@media (hover: hover) and (pointer: fine)': {
    ':hover': {
      bg: `alpha`,
      color: `white`,
      svg: {
        fill: `white`
      }
    }
  },
  ':before': {
    display: `none`
  }
}
