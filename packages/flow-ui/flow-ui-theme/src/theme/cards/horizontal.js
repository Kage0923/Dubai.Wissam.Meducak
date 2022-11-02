export default {
  content: {
    flexDirection: `row`
  },
  media: {
    flexBasis: `2/5`,
    m: 2,
    mr: 0
  },
  image: {
    minHeight: `8.3rem`,
    maxHeight: 290,
    img: {
      borderRadius: `default`,
      objectFit: `none`
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
    size: `icon.lg`
  },
  body: {
    p: 4
  },
  category: {
    display: `inline-block`
  },
  title: {
    variant: `text.h3`,
    flex: [0, null, `auto`]
  },
  excerpt: {
    display: `block`
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
