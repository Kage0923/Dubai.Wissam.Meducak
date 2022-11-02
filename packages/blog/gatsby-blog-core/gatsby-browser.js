import { globalHistory } from '@reach/router'

export const onRouteUpdate = () => {
  globalHistory.listen(args => {
    args.location.action = args.action
  })
}
