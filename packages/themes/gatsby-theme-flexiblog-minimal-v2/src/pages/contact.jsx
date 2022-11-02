import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'

export default props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Let's Connect"
          subheader='FlexiBlog theme comes with a pre-made contact form component.
					You can integrate this form with serverless services such as Formspree, Getform,
					FormKeep and others to receive form submissions via email.'
        />
        <Divider />
        <ContactForm />
      </Main>
    </Stack>
  </Layout>
)
