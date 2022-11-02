import icons from './default.social.icons'
import extractHostname from './extractHostname'

const attachSocialIcons = items =>
  items &&
  items.length &&
  items.map(item => {
    const name = (item.name || extractHostname(item.url || item)).toLowerCase()
    return {
      name,
      url: item.url || item,
      ...(icons[name] || icons.default)
    }
  })

export default attachSocialIcons
