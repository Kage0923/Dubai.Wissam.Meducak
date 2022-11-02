import React from 'react'
import { Layout, Stack, Main, PreFooter } from '@layout'
import PageTitle from '@components/PageTitle'
import Pagination from '@components/Pagination'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'

const PageCollectionAuthors = ({
  data: { posts, collectionInfo },
  ...props
}) => (
  <Layout {...props}>
    <Seo title={collectionInfo.name} description={collectionInfo.description} />
    <Divider />
    <Stack effectProps={{ effect: 'fadeInDown' }}>
      <PageTitle header='Published by Author' totalCount={posts.totalCount} />
    </Stack>
    <Divider />
    <Stack>
      <Main>
        <AuthorExpanded author={collectionInfo} />
        <Divider />
        {posts.nodes && (
          <CardList
            nodes={posts.nodes}
            variant={['horizontal-md', 'vertical']}
            columns={[1, 2, 3, 3]}
          />
        )}
      </Main>
    </Stack>
    <Divider />
    <PreFooter>
      <Pagination {...posts.pageInfo} {...collectionInfo} />
    </PreFooter>
  </Layout>
)

export default PageCollectionAuthors
