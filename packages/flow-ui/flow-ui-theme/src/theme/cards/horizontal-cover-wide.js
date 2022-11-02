export default {
  imageVariant: `hero`,

  card: {
    ':hover': {
      transform: `none`,
      boxShadow: `none`
    }
  },
  content: {
    flexDirection: [`column`, `row`],
    position: `relative`,
    maxHeight: `30rem`
  },
  media: {
    flexBasis: `full`,
    m: 0
  },
  image: {
    minHeight: `auto`,
    maxHeight: `none`,
    img: {
      borderRadius: `lg`
    }
  },
  iconBox: {
    borderRadius: `lg`,
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
    bg: `contentBg`,
    borderRadius: [`lg`, null, `xl`],
    width: [`full`, `2/3`, null, `2/5`],
    height: `auto`,
    alignItems: `center`,
    position: [`static`, `absolute`],
    transform: [`none`, `translate(-50%, -50%)`],
    left: `50%`,
    top: `50%`,
    zIndex: 3,
    p: 4
  },
  category: {
    display: [`none`, `block`]
  },
  title: {
    variant: `text.h2`,
    textAlign: `center`,
    color: `omegaDark`,
    mb: [0, 2, 3]
  },
  excerpt: {
    display: `none`
  },
  footer: {
    variant: `text.small`
  },
  authorPhoto: {
    display: [`none`, null, `block`]
  },
  author: {
    display: [`none`, `inline-block`],
    pr: [0, 0]
  },
  date: {
    display: `none`
  },
  timeToRead: {
    display: `none`
  }
}
