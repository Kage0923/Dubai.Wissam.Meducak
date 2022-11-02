import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import CardList from '@components/CardList'
import Card from '@components/Card'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import NewsletterExpanded from '@widgets/NewsletterExpanded'
import TableOfContentsExpanded from '@widgets/TableOfContentsExpanded'
import {
  PostBody,
  PostComments,
  PostCommentsFacebook,
  PostCommentsGraph,
  PostTagsShare
} from '@widgets/Post'

const Post = ({
  data: { post, tagCategoryPosts, tagPosts, categoryPosts },
  ...props
}) => {
  const relatedPosts = [
    ...(tagCategoryPosts ? tagCategoryPosts.nodes : []),
    ...(tagPosts ? tagPosts.nodes : []),
    ...(categoryPosts ? categoryPosts.nodes : [])
  ]
  const { pageContext: { services = {}, siteUrl } = {} } = props

  return (
    <Layout {...props}>
      <Seo {...post} siteUrl={siteUrl} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <Main>
          <Card {...post} variant='horizontal-hero' omitExcerpt />
        </Main>
      </Stack>
      <Divider space={3} />
      <Stack effectProps={{ fraction: 0 }}>
        <Main>
          {post.tableOfContents?.items && (
            <>
              <TableOfContentsExpanded {...post} />
              <Divider />
            </>
          )}
          <CardComponent variant='paper-lg'>
            <PostBody {...post} />
            <PostTagsShare {...post} location={props.location} />
            {services.disqus && <PostComments {...post} />}
            {services.graphComment && <PostCommentsGraph {...post} />}
            {services.facebookComment && (
              <PostCommentsFacebook {...post} siteUrl={siteUrl} />
            )}
          </CardComponent>
          <Divider />
          <AuthorExpanded author={post.author} />
          <Divider />
          {post.category && (
            <CardList
              nodes={relatedPosts}
              variant={['horizontal-md']}
              columns={[1, 2, 3, 3]}
              limit={6}
              title='Related Posts'
              distinct
            />
          )}
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

export default Post
