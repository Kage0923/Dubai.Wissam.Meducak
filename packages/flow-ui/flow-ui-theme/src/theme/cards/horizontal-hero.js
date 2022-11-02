export default {
  card: {
    borderRadius: `none`,
    boxShadow: `none`,
    bg: `transparent`,
    ':hover': {
      transform: `none`,
      boxShadow: `none`
    }
  },
  content: {
    flexDirection: [`column`, `row-reverse`],
    alignItems: `center`,
    py: [0, 2],
    position: `relative`
  },
  media: {
    width: [`full`, `auto`],
    maxWidth: [360, `none`],
    flexBasis: `1/3`,
    position: `relative`,
    m: 0,
    ml: [null, 0, 5],
    mx: 2,
    '&::before, &::after': {
      content: `""`,
      bg: `omegaLight`,
      position: `absolute`,
      borderRadius: t => `${t.radii.default} 0`
    },
    '::before': {
      top: -2,
      left: -2,
      size: `2/3`
    },
    '::after': {
      bottom: -2,
      right: -2,
      size: 80,
      borderRadius: [`0`, `3rem 0`]
    }
  },
  image: {
    maxHeight: `none`,
    bg: `transparent`,
    zIndex: 2,
    img: {
      borderRadius: t => [
        `${t.radii.default} 3rem 0 0`,
        `${t.radii.default} 3rem 3rem`
      ],
      objectFit: `none !important`
    }
  },
  iconBox: {
    borderRadius: `xxl`,
    minHeight: `15rem`,
    zIndex: 2
  },
  iconText: {
    display: [`none`, `block`]
  },
  icon: {
    size: `icon.lg`
  },
  body: {
    bg: [`contentBg`, `transparent`],
    borderRadius: `default`,
    p: [4, 0]
  },
  category: {
    display: `inline-block`
  },
  title: {
    variant: `text.h1`,
    m: 0
  },
  excerpt: {
    display: [`none`, `block`],
    flex: 0,
    fontSize: 3,
    mt: 4,
    mb: 0
  },
  footer: {
    variant: `text.h4`,
    alignSelf: `flex-start`,
    borderLeftStyle: `solid`,
    borderLeftWidth: `lg`,
    borderLeftColor: `omegaDark`,
    m: 0,
    mt: 4,
    px: 3,
    py: 2
  },
  authorPhoto: {
    display: [`none`, `block`]
  },
  author: {
    display: `inline-block`,
    flexBasis: [`auto`, `full`]
  },
  date: {
    display: `inline-block`
  },
  timeToRead: {
    display: `inline-block`
  }
}
