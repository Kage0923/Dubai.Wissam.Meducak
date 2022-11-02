import common from './common'

export default {
  ...common.button,
  color: `white`,
  bg: `alpha`,
  borderColor: `alpha`,
  ':hover': {
    color: `omegaLighter`,
    bg: `omegaDark`,
    borderColor: `omegaDark`
  }
}
