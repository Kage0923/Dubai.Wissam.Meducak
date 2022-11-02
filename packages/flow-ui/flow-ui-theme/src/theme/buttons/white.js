import common from './common'

export default {
  ...common.button,
  color: `omegaDark`,
  bg: `omegaLighter`,
  borderColor: `omega`,
  ':hover': {
    borderColor: `alpha`,
  },
}
