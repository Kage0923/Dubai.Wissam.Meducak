import common from './common'

export default {
  ...common.badge,
  bg: `white`,
  color: `alpha`,
  ':hover': {
    bg: `alpha`,
    color: `white`
  }
}
