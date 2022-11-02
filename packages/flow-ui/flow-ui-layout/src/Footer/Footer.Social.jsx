import React from 'react'
import { Heading } from 'theme-ui'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import attachSocialIcons from '@helpers/attachSocialIcons'

const styles = {
  social: {
    mb: [3, 0]
  },
  navHeader: {
    display: [`none`, `block`]
  }
}

export const FooterSocial = () => {
  const { social } = useSiteMetadata()

  return (
    <>
      <Heading variant='h4' as='p' sx={styles.navHeader}>
        Social Media
      </Heading>
      <Navigation
        items={attachSocialIcons(social)}
        variant={[`horizontal`, `vertical`]}
        wrapperStyle={styles.social}
      />
    </>
  )
}
