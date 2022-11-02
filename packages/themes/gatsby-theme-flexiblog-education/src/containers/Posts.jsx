import React from 'react'
import { Layout, Stack, Main } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import Testimonial from '@widgets/Testimonial'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import Hero from '../components/Hero/Hero'

const Posts = ({ data: { posts = {}, featuredPosts = {} }, ...props }) => {
  const { pageContext: { services = {} } = {} } = props

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Divider />
      <Stack>
        <Main>
          <Hero />
        </Main>
      </Stack>
      <Divider />
      <Stack>
        <Main>
          <CardList
            nodes={featuredPosts.nodes}
            limit={5}
            variant='vertical-cover'
            title='Featured this month'
            slider
            columns={[1, 2, 3, 3]}
            autoPlay
          />
        </Main>
      </Stack>
      <Divider />
      <Stack>
        <Main>
          <Testimonial />
        </Main>
      </Stack>
      <Stack>
        <Main>
          {posts.group.map(group => (
            <>
              <Divider />
              <CardList
                nodes={group.nodes}
                limit={4}
                variant='horizontal-md'
                title={group.categoryName}
                key={group.categoryName}
                columns={[1, 2, 2, 2]}
                withTitleLink
              />
            </>
          ))}
        </Main>
      </Stack>
      <Stack>
        <Main>
          {services.mailchimp && (
            <>
              <Divider />
              <NewsletterExpanded simple />
            </>
          )}
        </Main>
      </Stack>
    </Layout>
  )
}

export default Posts
