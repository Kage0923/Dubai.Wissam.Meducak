const urljoin = require('url-join')
const normalizeSlug = require('../utils/normalizeSlug')
const queryMobileMenu = require('../utils/queryMobileMenu')

module.exports = async (
  { graphql, actions, reporter },
  pluginOptions,
  { template, slugField }
) => {
  const { createPage } = actions
  const {
    collectionPostsPerPage,
    pagingParam,
    pageContextOptions
  } = pluginOptions

  pageContextOptions.mobileMenu = await queryMobileMenu({ graphql })

  const result = await graphql(`
		{
			allArticle (
        filter: {
          private: { ne: true }
          draft: {ne: true}
        }
      ) {
				group(field: ${slugField}, limit: ${collectionPostsPerPage}) {
					fieldValue
					pageInfo {
						pageCount
					}
				}
			}
		}
	`)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allArticle } = result.data
  const { group } = allArticle

  group.forEach(({ pageInfo, fieldValue: slug }) => {
    Array.from({ length: pageInfo.pageCount }, (_, i) => {
      let path = i === 0 ? slug : urljoin(slug, pagingParam, `${i + 1}`)
      path = normalizeSlug(path)

      createPage({
        path,
        component: template,
        context: {
          slug,
          limit: collectionPostsPerPage,
          skip: i * collectionPostsPerPage,
          collectionType: slugField.slice(0, slugField.indexOf('_')),
          ...pageContextOptions
        }
      })
    })
  })
}
