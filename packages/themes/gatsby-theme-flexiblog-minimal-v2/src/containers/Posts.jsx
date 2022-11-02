import React from 'react'
import { Layout, Stack, Hero, Main, PreFooter } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Pagination from '@components/Pagination'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import Seo from '@widgets/Seo'
import HeroComponent from '../components/Hero/Hero'

const Posts = ({ data: { paginatedPosts = {}, posts }, ...props }) => {
  const { pageContext: { services = {}, basePath } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Hero>
        <HeroComponent {...props} />
      </Hero>
      <Divider />
      <Stack>
        <Main sx={{ zIndex: 1 }}>
          <CardList
            variant={['horizontal']}
            title='What Experts Say About Marketing'
            nodes={paginatedPosts.nodes}
            columns={[1, 2]}
            omitMedia
          />
        </Main>
      </Stack>
      <Divider />
      <PreFooter>
        <Pagination {...paginatedPosts.pageInfo} basePath={basePath} />
      </PreFooter>
      <Divider space={5} />
      <Stack>
        <Main sx={{ zIndex: 1 }}>
          {services.mailchimp && <NewsletterExpanded simple />}
        </Main>
      </Stack>
    </Layout>
  )
}

export default Posts
