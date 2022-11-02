import React from 'react'
import HeroWide from '@widgets/HeroWide'
import Content from './Hero.Content'
import Photo from './Hero.Photo'

const Hero = props => {
  const {
    location: { pathname },
    pageContext: { basePath }
  } = props

  if (pathname !== basePath) return null

  return (
    <HeroWide.Wrapper>
      <HeroWide.LeftColumn>
        <Content />
      </HeroWide.LeftColumn>
      <HeroWide.RightColumn>
        <Photo />
      </HeroWide.RightColumn>
    </HeroWide.Wrapper>
  )
}

export default Hero
