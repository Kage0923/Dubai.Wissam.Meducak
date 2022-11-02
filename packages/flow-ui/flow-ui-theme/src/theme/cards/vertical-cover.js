export default {
  card: {
    bg: `transparent`,
    borderRadius: `lg`,
    overflow: `hidden`,
    willChange: `transform`
  },
  content: {
    flexDirection: `row`,
    position: `relative`
  },
  media: {
    flexBasis: `full`,
    m: 0
  },
  image: {
    minHeight: `15rem`,
    maxHeight: [`20rem`, 470],
    bg: `transparent`
  },
  iconBox: {
    borderRadius: `default`,
    minHeight: `20rem`
  },
  iconText: {
    display: `none`
  },
  icon: {
    height: `5/6`,
    ml: `40%`,
    opacity: 0.5
  },
  body: {
    height: `full`,
    width: `full`,
    background: `linear-gradient(
				0deg,
				#2d3748 0%,
				transparent 100%
			)`,
    position: `absolute`,
    zIndex: 3,
    p: [3, 4]
  },
  category: {
    display: [`none`, `block`]
  },
  title: {
    variant: `text.h2`,
    color: `white`,
    mt: `auto`
  },
  excerpt: {
    display: `none`
  },
  footer: {
    variant: `text.small`
  },
  authorPhoto: {
    display: `block`
  },
  author: {
    display: `inline-block`,
    flexBasis: `full`,
    'a, a:visited': {
      color: `white`
    },
    pr: [0, 0]
  },
  date: {
    display: `inline-block`
  },
  timeToRead: {
    display: [`none`, `inline-block`]
  }
}
