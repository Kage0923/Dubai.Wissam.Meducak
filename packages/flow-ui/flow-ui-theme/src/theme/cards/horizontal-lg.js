export default {
  content: {
    flexDirection: `row`
  },
  media: {
    flexBasis: `1/2`,
    textAlign: `left`,
    m: 0
  },
  image: {
    borderRadius: `none`,
    minHeight: `15rem`,
    maxHeight: `none`,
    img: {
      borderRadius: t => `${t.radii.lg} 0 0 ${t.radii.lg}`
    }
  },
  iconBox: {
    borderRadius: `none`,
    minHeight: `15rem`
  },
  iconText: {
    display: [`none`, `block`]
  },
  icon: {
    size: `icon.lg`
  },
  body: {
    alignSelf: `center`,
    p: 4
  },
  category: {
    display: `inline-block`
  },
  title: {
    variant: `text.h2`,
    flex: 0,
    mb: 4
  },
  excerpt: {
    display: `block`,
    flex: 0,
    mb: 4
  },
  footer: {
    variant: `text.small`
  },
  authorPhoto: {
    display: `block`
  },
  author: {
    display: `inline-block`,
    flexBasis: `full`
  },
  date: {
    display: `inline-block`
  },
  timeToRead: {
    display: `inline-block`
  }
}
