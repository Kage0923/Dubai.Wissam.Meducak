import React from 'react'
import HeroWide from '@widgets/HeroWide'
import ContentLeft from './Hero.Content.Left'
import ContentRight from './Hero.Content.Right'

export default () => (
  <HeroWide.Wrapper sx={{ py: 3 }}>
    <HeroWide.LeftColumn>
      <ContentLeft />
    </HeroWide.LeftColumn>
    <HeroWide.RightColumn>
      <ContentRight />
    </HeroWide.RightColumn>
  </HeroWide.Wrapper>
)
