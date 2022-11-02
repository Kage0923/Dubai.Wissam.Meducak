import React from 'react'
import { Link as GLink } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, css } from 'theme-ui'
import Section from '@components/Section'

const styles = {
  image: {
    overflow: `hidden`,
    img: {
      borderRadius: `lg`
    }
  },
  caption: {
    display: `block`,
    textAlign: `center`,
    fontSize: 0,
    mt: 1
  }
}

const Sponsor = props => {
  const data = useStaticQuery(sponsorQuery)
  const image = getImage(data.banner)

  return (
    <Section aside title='Our Sponsor' {...props}>
      <Link href='/' target='_blank'>
        <Img image={image} css={css(styles.image)} alt='Sponsor' />
      </Link>
      <Link variant='mute' as={GLink} to='/contact' sx={styles.caption}>
        ADVERTISE WITH US
      </Link>
    </Section>
  )
}

const sponsorQuery = graphql`
  query SponsorQuery {
    banner: file(absolutePath: { regex: "/sponsor.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 342
          height: 260
          transformOptions: { cropFocus: CENTER }
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
export default Sponsor
