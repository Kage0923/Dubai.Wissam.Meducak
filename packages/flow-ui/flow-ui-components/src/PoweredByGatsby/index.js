import loadable from '@loadable/component'
export default loadable(() =>
  import(/* webpackPrefetch: true */ './PoweredByGatsby')
)
