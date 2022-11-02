import common from './common'

export default {
  ...common.badge,
  bg: `omegaLight`,
  color: `omegaDark`,
  ':hover': {
    color: `omegaLight`,
    bg: `omegaDark`
  }
}
