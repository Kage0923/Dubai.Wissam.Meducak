export default {
  /** Root (body tag) */
  root: {
    WebkitFontSmoothing: `antialiased`,
    textDecoration: `none`
  },

  /** MDX articles */
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    hyphens: `none`,
    overflow: `auto`,
    borderRadius: `default`,
    tabSize: 4,
    p: 3,
    my: 4
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `#4a5568`,
    bg: `highlight`,
    py: 1,
    px: 2
  },
  a: {
    variant: `links.normal`
  },
  h1: {
    variant: `text.h1`,
    borderBottomWidth: `sm`,
    borderBottomStyle: `solid`,
    borderBottomColor: `omegaLight`,
    pb: 3,
    mb: 4
  },
  h2: {
    variant: `text.h2`
  },
  h3: {
    variant: `text.h3`,
    '& + pre': {
      mt: 0
    }
  },
  h4: {
    variant: `text.h4`,
    '& + pre': {
      mt: 0
    }
  },
  h5: {
    variant: `text.h5`
  },
  h6: {
    variant: `text.h6`
  },
  hr: {
    my: 4,
    color: `omegaLight`
  },
  p: {
    color: 'article',
    fontSize: 3,
    mb: 4,
    code: {
      fontSize: `inherit`
    }
  },
  ol: {
    mb: 4
  },
  ul: {
    mb: 4
  },
  li: {
    color: 'article',
    fontSize: 3,
    code: {
      fontSize: `inherit`
    },
    m: 0
  },
  table: {
    borderRadius: `default`,
    overflow: `hidden`,
    bg: `omegaLight`
  },
  tr: {
    '&:nth-of-type(even)': {
      bg: `omegaLighter`
    }
  },
  th: {
    bg: `omegaDarker`,
    color: `omegaLighter`,
    fontWeight: `normal`,
    p: 2,
    '&:first-of-type': {
      pl: 3
    },
    '&:last-of-type': {
      pr: 3
    }
  },
  td: {
    borderBottomWidth: 0,
    p: 2,
    '&:first-of-type': {
      pl: 3
    },
    '&:last-of-type': {
      pr: 3
    }
  },
  blockquote: {
    p: {
      color: `text`
    },
    fontStyle: `italic`,
    borderLeftStyle: `solid`,
    borderLeftColor: `alphaLight`,
    borderLeftWidth: `md`,
    mx: [0, 4],
    px: [3, 4],
    '&.translation': {
      fontSize: 2
    }
  },
  figure: {
    boxShadow: `1px 1px 5px 0 rgba(1,1,1,.15)`,
    overflow: `hidden`,
    backgroundColor: `contentBg`,
    borderRadius: 'default',
    margin: 0
  },
  figcaption: {
    textAlign: `center`,
    fontStyle: `italic`,
    fontSize: 1,
    margin: 3
  }
}
