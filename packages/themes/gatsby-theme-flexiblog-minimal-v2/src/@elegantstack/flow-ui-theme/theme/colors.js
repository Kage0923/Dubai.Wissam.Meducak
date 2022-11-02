import colors from '@elegantstack/flow-ui-theme/src/theme/colors'

export default {
  ...colors,
  background: `#fbfbfb`,
  headerBg: `transparent`,
  footerBg: `transparent`,
  modes: {
    ...colors.modes,
    dark: {
      ...colors.modes.dark,
      headerBg: `transparent`,
      footerBg: `transparent`,
    },
  },
}
