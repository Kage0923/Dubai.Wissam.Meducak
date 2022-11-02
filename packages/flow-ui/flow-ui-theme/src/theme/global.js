export default {
  html: {
    fontSize: [`85%`, `90%`, `95%`, `100%`],
    scrollBehavior: `smooth`
  },
  '::selection': {
    color: t => t.colors.white,
    background: t => t.colors.omegaDark
  }
}
