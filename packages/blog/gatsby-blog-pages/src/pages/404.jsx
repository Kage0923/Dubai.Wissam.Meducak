import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const Page404 = props => (
  <Layout {...props}>
    <Seo title='Page Not Found' />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header="Sorry, this page isn't available."
            subheader='You may have mistyped the address or the page may have moved.'
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
            Go to homepage
          </Button>
        </Section>
      </Main>
    </Stack>
  </Layout>
)

export default Page404
