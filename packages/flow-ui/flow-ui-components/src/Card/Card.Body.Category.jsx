import React from 'react'
import { Link } from 'gatsby'
import { Box, Badge, css } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import getReadableColor from '@components/utils/getReadableColor'

const styles = {
  badge: {
    mb: 3
  }
}

const CardBodyCategory = ({ variant, category, omitCategory }) =>
  !omitCategory && category && category.slug ? (
    <Box css={css(styles.badge)} sx={{ variant: rv(variant, 'category') }}>
      <Badge
        variant='tag'
        as={Link}
        to={category.slug}
        sx={
          category.color && {
            bg: category.color,
            color: getReadableColor(category.color)
          }
        }
      >
        {category.name}
      </Badge>
    </Box>
  ) : null

export default CardBodyCategory
