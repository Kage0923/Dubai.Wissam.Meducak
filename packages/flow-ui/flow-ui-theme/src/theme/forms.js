export default {
  row: {
    display: [`block`, null, `flex`],
    flexWrap: `wrap`,
    mb: 3
  },
  column: {
    flex: `auto`,
    mb: [3, null, 0],
    '+ div': {
      ml: [0, null, 3]
    }
  },
  input: {
    fontFamily: `body`,
    border: `none`,
    bg: `omegaLight`,
    color: `omegaDark`,
    outline: `none`,
    '::placeholder': {
      color: `omegaDark`
    }
  },
  textarea: {
    variant: 'forms.input',
    fontSize: 3,
    minHeight: 100
  },
  label: {
    mb: 2
  }
}
