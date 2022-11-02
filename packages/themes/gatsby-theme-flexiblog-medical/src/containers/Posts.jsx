import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Reveal from '@components/Reveal'
import Sticky from '@components/Sticky'
import Seo from '@widgets/Seo'
import Tags from '@widgets/Tags'
import Sponsor from '@widgets/Sponsor'
import Social from '@widgets/Social'
import NewsletterCompact from '@widgets/NewsletterCompact'
import Categories from '@widgets/Categories'
import { useBlogTags, useBlogCategories } from '@helpers-blog'

const Posts = ({
  data: { posts = {}, featuredPosts = {}, recentPosts = {} },
  ...props
}) => {
  const { pageContext: { services = {} } = {} } = props
  const tags = useBlogTags()
  const categories = useBlogCategories()

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Divider />
      <Stack effectProps={{ effect: false }}>
        <Main>
          <CardList
            nodes={featuredPosts.nodes}
            variant='vertical-cover'
            limit={4}
            columns={[1, 2]}
            title='Featured this month'
            slider
            autoPlay
            loading='eager'
          />
          <Divider />
          <CardList
            nodes={featuredPosts.nodes}
            variant={['horizontal-md', 'horizontal']}
            limit={2}
            skip={4}
            title='Top Stories'
            loading='eager'
          />
          {posts.group &&
            posts.group.map(group => (
              <>
                <Divider />
                <Reveal>
                  <CardList
                    nodes={group.nodes}
                    variant={['horizontal-md', 'vertical']}
                    limit={2}
                    columns={[1, 2, 2, 2]}
                    title={group.categoryName}
                    omitCategory
                    withTitleLink
                  />
                  <Divider space={2} />
                  <CardList
                    nodes={group.nodes}
                    variant={['horizontal-md', 'horizontal-aside']}
                    limit={4}
                    skip={2}
                    columns={[1, 2, 2, 2]}
                    omitCategory
                    withTitleLink
                  />
                </Reveal>
              </>
            ))}
        </Main>
        <Sidebar>
          <CardList
            nodes={recentPosts.nodes}
            limit={4}
            variant='horizontal-aside'
            title='Recently Published'
            omitMedia
            omitCategory
            aside
          />
          <Divider />
          <Sponsor />
          <Divider />
          <Social />
          <Divider />
          <Tags tags={tags} />
          <Divider />
          <Sticky>
            <Categories categories={categories} />
            {services.mailchimp && (
              <>
                <Divider />
                <NewsletterCompact />
              </>
            )}
          </Sticky>
        </Sidebar>
      </Stack>
    </Layout>
  )
}

export default Posts
