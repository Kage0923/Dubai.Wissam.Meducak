import React from 'react'
import HeroWide from '@widgets/HeroWide'
import Content from './Hero.Content'
import Overlay from './Hero.Overlay'

const styles = {
  wrapper: {
    pb: 0
  }
}

const Hero = props => {
  const {
    location: { pathname },
    pageContext: { basePath }
  } = props

  if (pathname !== basePath) return null

  return (
    <HeroWide.Wrapper sx={styles.wrapper}>
      <HeroWide.LeftColumn>
        <Content />
      </HeroWide.LeftColumn>
      <HeroWide.Overlay>
        <Overlay />
      </HeroWide.Overlay>
    </HeroWide.Wrapper>
  )
}

export default Hero
