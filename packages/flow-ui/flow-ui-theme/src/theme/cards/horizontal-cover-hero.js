export default {
  imageVariant: `hero`,

  card: {
    borderRadius: `none`,
    ':hover': {
      transform: `none`,
      boxShadow: `none`
    }
  },
  content: {
    flexDirection: [`column`, null, `row`],
    position: `relative`,
    ':after': {
      display: [`none`, null, `block`],
      height: [0, `2/3`, null, `2/3`],
      width: `full`,
      position: `absolute`,
      bottom: 0,
      content: `""`,
      background: `linear-gradient(
        0deg,
      	#2d3748 0%,
      	transparent 100%
      )`
    }
  },
  media: {
    flexBasis: `full`,
    m: 0
  },
  image: {
    minHeight: `auto`,
    maxHeight: `none`,
    width: `full`
  },
  iconBox: {
    borderRadius: 0,
    minHeight: `20rem`
  },
  iconText: {
    display: `none`
  },
  icon: {
    size: `5/6`,
    ml: `40%`,
    opacity: 0.5
  },
  body: {
    height: `auto`,
    width: `100%`,
    maxWidth: `container`,
    position: [`static`, null, `absolute`],
    transform: [`none`, null, `translate(-50%, 0)`],
    left: `50%`,
    bottom: 0,
    zIndex: 3,
    px: 4,
    py: [4, null, 0],
    mb: [0, null, 4, 5]
  },
  category: {
    display: `block`
  },
  title: {
    fontFamily: `heading`,
    fontSize: [5, 6, null, 7],
    width: [`full`, null, null, `2/3`],
    color: [`heading`, null, `white`],
    textAlign: `left`,
    pr: [0, null, 4, 5],
    m: 0
  },
  excerpt: {
    display: `none`
  },
  footer: {
    variant: `text.h4`,
    alignSelf: `flex-start`,
    borderLeftStyle: `solid`,
    borderLeftWidth: `lg`,
    borderLeftColor: `omegaDark`,
    m: 0,
    mt: 3,
    px: 3,
    py: 2
  },
  authorPhoto: {
    display: [`block`, null, `none`]
  },
  author: {
    display: [`inline-block`, null, `none`],
    flexBasis: [`auto`, `full`],
    'a, a:visited': {
      color: [`alpha`, null, `omegaLighter`]
    }
  },
  date: {
    display: `inline-block`
  },
  timeToRead: {
    display: `inline-block`
  }
}
