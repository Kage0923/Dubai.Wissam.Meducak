import React from 'react'
import { Layout, Stack, Main, Sidebar, PreFooter } from '@layout'
import CardList from '@components/CardList'
import Pagination from '@components/Pagination'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import NewsletterExpanded from '@widgets/NewsletterExpanded'

const Posts = ({
  data: { featuredPosts = {}, paginatedPosts = {} },
  ...props
}) => {
  const { pageContext: { services = {}, basePath } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {props.location.pathname === basePath && (
        <>
          <Divider />
          <Stack
            effectProps={{ effect: false }}
            title='Suggested Articles'
            direction={[`column`, `column`, `column`, `row`]}
          >
            <Main mb={[3, 3, 3, 0]}>
              <CardList
                nodes={featuredPosts.nodes}
                limit={1}
                variant={['vertical', 'horizontal-lg']}
                loading='eager'
              />
            </Main>
            <Sidebar
              pl={[0, 0, 0, 3]}
              sx={{ display: [`block`, `block`, `flex`] }}
            >
              <CardList
                nodes={featuredPosts.nodes}
                limit={4}
                skip={4}
                variant={[
                  'horizontal-md',
                  'horizontal',
                  'horizontal',
                  'horizontal-aside'
                ]}
                omitMedia
                omitCategory
                aside
              />
            </Sidebar>
          </Stack>
          <Divider />
          <Stack>
            <Main>
              <CardList
                nodes={featuredPosts.nodes}
                limit={3}
                skip={1}
                columns={[1, 1, 1, 3]}
                variant={[
                  'horizontal-md',
                  'horizontal',
                  'horizontal',
                  'vertical'
                ]}
              />
            </Main>
          </Stack>
        </>
      )}
      <Divider />
      <Stack title='Recently Published'>
        <Main>
          <CardList
            nodes={paginatedPosts.nodes}
            variant={['horizontal', 'vertical']}
            columns={[1, 2, 3, 3]}
            omitMedia
          />
        </Main>
      </Stack>
      <Divider />
      <PreFooter>
        <Pagination {...paginatedPosts.pageInfo} basePath={basePath} />
        {services.mailchimp && (
          <>
            <Divider />
            <NewsletterExpanded simple />
          </>
        )}
      </PreFooter>
    </Layout>
  )
}

export default Posts
