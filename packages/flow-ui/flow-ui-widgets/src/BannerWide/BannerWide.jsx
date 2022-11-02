import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Heading, Box } from 'theme-ui'
import { Hero } from '@layout'
import HeroWide from '@widgets/HeroWide'
import MemphisPattern from '@components/MemphisPattern'

const styles = {
  hero: src => ({
    backgroundImage: src && `url(${src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    position: `relative`
  }),
  wrapper: {
    py: 0
  },
  heading: {
    color: `omegaDark`,
    span: {
      color: `alpha`
    }
  },
  rightColumn: {
    flexBasis: `1/3`
  },
  quoteWrapper: {
    borderLeft: `5px solid`,
    borderLeftColor: `omegaLighter`,
    pl: 5,
    py: 2,
    my: 5
  },
  quote: {
    color: `omegaDark`,
    fontWeight: `body`
  },
  quoteAuthor: {
    color: `omegaDark`,
    mb: 0
  }
}

const BannerWide = () => {
  const data = useStaticQuery(bannerWideQuery)
  const { file } = data
  const bg = file && file.hero && file.hero.regular

  return (
    <Hero sx={styles.hero(bg.src)}>
      <HeroWide.Wrapper sx={styles.wrapper}>
        <HeroWide.LeftColumn>
          <Heading variant='h1' sx={styles.heading}>
            Get Inspired to Achieve
            <br />
            <span>Enhanced Outcomes.</span>
          </Heading>
        </HeroWide.LeftColumn>
        <HeroWide.RightColumn sx={styles.rightColumn}>
          <Box sx={styles.quoteWrapper}>
            <Heading variant='h3' sx={styles.quote}>
              “While one person hesitates because he feels inferior, the other
              is busy making mistakes and becoming superior.”
            </Heading>
            <Heading variant='h4' sx={styles.quoteAuthor}>
              Henry C. Link
            </Heading>
          </Box>
        </HeroWide.RightColumn>
      </HeroWide.Wrapper>
      <MemphisPattern />
    </Hero>
  )
}

const bannerWideQuery = graphql`
  query BannerWideQuery {
    file(absolutePath: { regex: "/banner_wide.(jpeg|jpg|gif|png)/" }) {
      hero: childImageSharp {
        regular: resize(width: 1920, height: 320, cropFocus: CENTER) {
          src
        }
      }
    }
  }
`
export default BannerWide
