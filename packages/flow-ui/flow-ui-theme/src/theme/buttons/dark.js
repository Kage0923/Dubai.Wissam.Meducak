import common from './common'

export default {
  ...common.button,
  color: `omegaLighter`,
  bg: `omegaDark`,
  borderColor: `omegaDark`,
  ':hover': {
    color: `white`,
    bg: `alpha`,
    borderColor: `alpha`
  }
}
