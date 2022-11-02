export default {
  content: {
    flexDirection: `row`,
    borderLeftStyle: `solid`,
    borderLeftWidth: `lg`,
    borderLeftColor: `alphaLight`
  },
  media: {
    flexBasis: `1/3`,
    m: 2,
    mr: 0
  },
  image: {
    minHeight: `8.3rem`,
    maxHeight: `none`,
    img: {
      borderRadius: `default`
    }
  },
  iconBox: {
    borderRadius: `default`,
    minHeight: `8.3rem`
  },
  iconText: {
    display: [`none`, `block`]
  },
  icon: {
    size: `icon.sm`
  },
  body: {
    minHeight: 100,
    p: 3
  },
  category: {
    display: `inline-block`
  },
  title: {
    variant: `text.h4`,
    mb: 2
  },
  excerpt: {
    display: `none`
  },
  footer: {
    variant: `text.xsmall`
  },
  authorPhoto: {
    display: `none`
  },
  author: {
    display: `inline-block`,
    flexBasis: `auto`
  },
  date: {
    display: `inline-block`
  },
  timeToRead: {
    display: `inline-block`
  }
}
