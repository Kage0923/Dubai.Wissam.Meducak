import React from 'react'
import MemphisPattern from '@components/MemphisPattern'
import HeroBoxed from '@widgets/HeroBoxed'
import Content from './Testimonial.Content'
import Photo from './Testimonial.Photo'

const Testimonial = () => (
  <HeroBoxed.Wrapper>
    <HeroBoxed.RightColumn>
      <Photo />
    </HeroBoxed.RightColumn>
    <HeroBoxed.LeftColumn>
      <Content />
    </HeroBoxed.LeftColumn>
    <MemphisPattern />
  </HeroBoxed.Wrapper>
)

export default Testimonial
