import common from './common'

export default {
  ...common.button,
  color: `omegaDark`,
  bg: `omegaLight`,
  borderColor: `omegaLight`,
  ':hover': {
    color: `white`,
    bg: `alpha`,
    borderColor: `alpha`
  }
}
