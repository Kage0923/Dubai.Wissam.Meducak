import React from 'react'
import SVG from 'react-inlinesvg'
import { Flex, Box, Text, css } from 'theme-ui'
import MemphisPattern from '@components/MemphisPattern'
import rv from '@components/utils/buildResponsiveVariant'
import getReadableColor from '@components/utils/getReadableColor'

const styles = {
  iconBox: {
    height: `full`
  },
  iconAndText: {
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    // color: `omegaDark`,
    position: `relative`,
    fontWeight: `medium`,
    height: `full`,
    zIndex: 2,
    px: 2,
    lineHeight: 1.33,
    svg: {
      pb: 2
    }
  },
  pattern: {
    opacity: 0.07,
    borderRadius: `default`
  }
}

const CardMediaIcon = ({ variant, thumbnailText, category }) =>
  category && category.icon && category.name ? (
    <Box
      bg={category.color || 'omegaDark'}
      color={category.color ? getReadableColor(category.color) : '#fff'}
      sx={{
        ...styles.iconBox,
        variant: rv(variant, 'iconBox')
      }}
    >
      <Flex sx={styles.iconAndText}>
        <SVG src={category.icon} css={css({ variant: rv(variant, 'icon') })} />
        <Text sx={{ variant: rv(variant, 'iconText') }}>
          {thumbnailText || category.name}
        </Text>
      </Flex>
      <MemphisPattern sx={styles.pattern} />
    </Box>
  ) : null

export default CardMediaIcon
