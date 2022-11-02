const message = {
  variant: `text.small`,
  textAlign: `center`,
  border: `none`,
  mb: 3
}

export default {
  success: {
    ...message,
    color: `success`,
    bg: `successLight`
  },
  error: {
    ...message,
    color: `error`,
    bg: `errorLight`
  }
}
