export default {
  imageVariant: `horizontal`,

  card: {
    ':hover': {
      transform: `none`,
      boxShadow: `none`
    }
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
    img: {
      borderRadius: `lg`
    }
  },
  iconBox: {
    borderRadius: `default`,
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
    height: `full`,
    width: `full`,
    justifyContent: `flex-start`,
    background: `linear-gradient(
				120deg,
				#2d3748 0%,
				transparent 180%
			)`,
    borderRadius: `lg`,
    position: `absolute`,
    zIndex: 3,
    p: 0,
    pt: [4, 5],
    pl: [4, 6],
    pr: 4
  },
  category: {
    display: [`none`, `block`]
  },
  title: {
    fontSize: [4, , null, 6],
    textShadow: t => `
			1px 1px 0px #2d3748
    `,
    color: `white`,
    width: `full`,
    mt: `auto`
  },
  excerpt: {
    display: `none`
  },
  footer: {
    mt: `auto`,
    pb: 6
  },
  authorPhoto: {
    display: [`none`, `block`]
  },
  author: {
    display: `inline-block`,
    flexBasis: `full`,
    'a, a:visited': {
      color: `omegaLight`
    }
  },
  date: {
    display: [`none`, `inline-block`],
    color: `omegaLight`
  },
  timeToRead: {
    display: [`none`, `inline-block`],
    color: `omegaLight`
  }
}
