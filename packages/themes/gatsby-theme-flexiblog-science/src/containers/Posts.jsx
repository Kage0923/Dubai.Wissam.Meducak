import React from 'react'
import { Box } from 'theme-ui'
import { Layout, Stack, Main, Hero } from '@layout'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import Categories from '@widgets/Categories'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import { useBlogCategories } from '@helpers-blog'

const Posts = ({
  data: { posts = {}, featuredPosts = {}, recentPosts = {} },
  ...props
}) => {
  const { pageContext: { services = {} } = {} } = props
  const categories = useBlogCategories()
  const sliderRef = React.useRef()

  return (
    <Layout {...props}>
      <Seo title='Home' />
      <Hero
        pt={4}
        pb={5}
        sx={{
          background: t =>
            `linear-gradient(
              0deg,
              ${t.colors.omegaLighter},
              ${t.colors.background}
            )`
        }}
      >
        <Divider space={3} />
        <Box sx={{ position: `relative`, zIndex: 3 }}>
          <Box sx={{ display: [`none`, `block`] }}>
            <Categories
              categories={categories}
              variant='horizontal'
              omitTitle
            />
            <Divider />
          </Box>
          <CardList
            nodes={featuredPosts.nodes}
            variant={['horizontal-hero']}
            limit={3}
            omitFooter
            slider
            autoPlay
            fade
            arrows={false}
            controlPosition='bottom'
            ref={sliderRef}
            loading='eager'
          />
          <Box sx={{ display: [`none`, null, `block`] }}>
            <Divider />
            <CardList
              nodes={featuredPosts.nodes}
              variant={['horizontal-md', 'horizontal-aside']}
              limit={3}
              columns={[1, 0, 3]}
              omitCategory
              asNavFor={sliderRef}
              loading='eager'
            />
          </Box>
        </Box>
      </Hero>
      <Divider />
      <Stack>
        <Main>
          <CardList
            nodes={featuredPosts.nodes}
            variant={['horizontal-md', 'horizontal', 'horizontal', 'vertical']}
            limit={3}
            skip={3}
            columns={[1, 2, 3]}
            omitMedia
            title="Editor's Pick"
          />
        </Main>
      </Stack>
      <Divider />
      <Stack
        effectProps={{ effect: false }}
        title='Whats New?'
        direction={[`column`, null, null, `row`]}
      >
        <Main
          sx={{
            display: [`block`, null, null, `flex`]
          }}
        >
          <CardList
            nodes={recentPosts.nodes}
            variant={['vertical-cover']}
            limit={2}
          />
        </Main>
        <Divider space={2} />
        <Main
          sx={{
            mx: [0, null, null, 3],
            display: [`block`, null, null, `flex`]
          }}
        >
          <CardList
            nodes={recentPosts.nodes}
            variant={['horizontal-md', 'horizontal', 'horizontal', 'vertical']}
            limit={1}
            skip={2}
          />
        </Main>
        <Divider space={2} />
        <Main>
          <CardList
            nodes={recentPosts.nodes}
            variant={[
              'horizontal-md',
              'horizontal-md',
              'horizontal',
              'horizontal-aside'
            ]}
            limit={3}
            skip={3}
            columns={[1, 2, 1, 1]}
          />
        </Main>
      </Stack>
      <Divider />
      <Hero wide>
        <CardList
          nodes={featuredPosts.nodes}
          variant='horizontal-cover-wide'
          limit={4}
          skip={6}
          slider
          autoPlay
          fade
          dots={false}
          controlPosition='bottom'
        />
      </Hero>
      <Divider />
      {posts.group.length &&
        posts.group.map((group, index) => (
          <React.Fragment key={`${group.categoryName}.list`}>
            {index % 2 === 0 ? (
              <Stack
                title={group.categoryName}
                titleLink={group.nodes[0].category.slug}
              >
                <Main>
                  <CardList
                    nodes={group.nodes}
                    variant={['horizontal-md', 'vertical']}
                    limit={6}
                    columns={[1, 2, 3, 3]}
                    omitCategory
                  />
                </Main>
              </Stack>
            ) : (
              <Stack
                title={group.categoryName}
                titleLink={group.nodes[0].category.slug}
              >
                <Main>
                  <CardList
                    nodes={group.nodes}
                    variant={['horizontal-md', 'horizontal']}
                    limit={6}
                    columns={[1, 1, 2]}
                    omitCategory
                  />
                </Main>
              </Stack>
            )}
            {index !== posts.group.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      <Divider space={5} />
      <Stack>
        <Main>{services.mailchimp && <NewsletterExpanded />}</Main>
      </Stack>
    </Layout>
  )
}

export default Posts
