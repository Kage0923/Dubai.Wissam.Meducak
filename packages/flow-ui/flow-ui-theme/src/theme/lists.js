export default {
  /** Card List Containers */
  cards: {
    fixed: {
      horizontal: {
        display: `flex`,
        flexWrap: `wrap`,
        m: -2,
        '.blog_card': {
          maxWidth: `none`,
          flexGrow: 1,
          p: 2
        }
      },
      'horizontal-cover-wide': {
        display: `flex`,
        flexWrap: `wrap`
      },
      'horizontal-md': {
        display: `flex`,
        flexWrap: `wrap`,
        m: -2,
        '.blog_card': {
          maxWidth: `none`,
          flexGrow: 1,
          p: 2
        }
      },
      'horizontal-aside': {
        display: `flex`,
        flexWrap: `wrap`,
        m: -2,
        '.blog_card': {
          maxWidth: `none`,
          flexGrow: 1,
          p: 2
        }
      },
      'horizontal-lg': {
        display: `flex`,
        flexWrap: `wrap`,
        m: -2,
        '.blog_card': {
          maxWidth: `none`,
          flexGrow: 1,
          p: 2
        }
      },
      vertical: {
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `center`,
        m: -2,
        '.blog_card': {
          minWidth: `18rem`,
          maxWidth: 380,
          flexGrow: 1,
          p: 2
        }
      },
      'vertical-cover': {
        display: `flex`,
        flexWrap: [`nowrap`, `nowrap`, `wrap`],
        justifyContent: [`flex-start`, null, `center`],
        overflowX: `auto`,
        width: `auto`,
        scrollBehavior: `smooth`,
        m: -2,
        '.blog_card': {
          minWidth: [`4/5`, `auto`, `18rem`],
          maxWidth: 380,
          flexGrow: 1,
          p: 2
        }
      },
      search: {
        '.blog_card': {
          p: 2
        }
      }
    },
    slider: {
      'vertical-cover': {
        display: `flex`,
        m: [-3, -2],
        '.blog_card': {
          maxWidth: `none`,
          p: 2
        }
      },
      'horizontal-aside': {
        display: `flex`,
        flexWrap: `wrap`,
        m: -2,
        '.blog_card': {
          maxWidth: `none`,
          p: 2
        }
      }
    }
  },
  links: {
    horizontal: {
      flexDirection: `row`,
      justifyContent: `center`,
      flexWrap: `wrap`
    },
    vertical: {
      flexDirection: `column`,
      justifyContent: `flex-start`,
      flexWrap: `nowrap`
    }
  },
  badges: {
    a: {
      mb: 1,
      mr: 1
    }
  }
}
