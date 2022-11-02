export default {
  layout: {
    flexDirection: 'column',
    height: `100vh`
  },
  header: {
    justifyContent: `space-between`,
    alignItems: `center`,
    height: [`6rem`, `7rem`], //prevent layout shift
    py: [3, 4]
  },
  body: {
    flex: `1 1 auto`
  },
  footer: {
    flexDirection: [`column-reverse`, `row`],
    justifyContent: `space-between`,
    alignItems: [`center`, `flex-start`],
    py: 5
  },

  /** Container */
  container: {
    maxWidth: `container`,
    px: [3, 4]
  },
  /** Container (full width version) */
  wide: {
    maxWidth: `wide`,
    px: [3, 4]
  },
  full: {
    maxWidth: `none`
  },
  /** Container (compact version) */
  compact: {
    px: [3, 4]
  },

  /** Main Container with sidebar support */
  main: {
    flex: 1,
    ml: 0
  },
  /** Sidebar */
  sidebar: {
    display: [`none`, null, `block`],
    flexBasis: `1/3`,
    pl: 5,
    mr: 0
  },

  /** Sections in container */
  section: {
    maxWidth: `none`
  },

  /** Sidebar Container */
  'section-aside': {
    variant: `layout.section`
  },

  /** Sticky Box */
  sticky: {
    position: `sticky`,
    top: 4
  }
}
