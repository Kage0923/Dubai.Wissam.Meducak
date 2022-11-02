import React from 'react'
import { Box, IconButton, css, useColorMode } from 'theme-ui'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import { FaMoon, FaSun } from 'react-icons/fa'

const styles = {
  switch: {
    display: [`none`, null, `block`],
    // Switch Body
    '&.rc-switch': {
      background: `linear-gradient(45deg, #FF7D6B, #FFD64C)`,
      border: 0,
      width: 50,
      height: 24,
      '&:focus': {
        boxShadow: `none`
      }
    },
    '&.rc-switch-checked': {
      background: `linear-gradient(45deg, #3366FF, #AC15B8)`,
      border: 0
    },
    // Switch Handle
    '&.rc-switch:after': {
      size: `21px`
    },
    '&.rc-switch-checked:after': {
      left: `auto`,
      right: `2px`
    },
    // Switch Icons
    '.rc-switch-inner': {
      fontSize: `unset`,
      top: `1px`,
      left: `26px`
    },
    '&.rc-switch-checked .rc-switch-inner': {
      left: `7px`
    }
  },
  icon: {
    verticalAlign: `middle`
  },
  //Mobile
  mobileTrigger: {
    display: [`block`, null, `none`]
  }
}

export const HeaderColorMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const handleChange = () =>
    setColorMode(colorMode === 'default' ? 'dark' : 'default')

  const label = `Toggle dark mode`

  return (
    <Box>
      <IconButton
        aria-label={label}
        onClick={handleChange}
        sx={styles.mobileTrigger}
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </IconButton>
      <Switch
        aria-label={label}
        onChange={handleChange}
        onClick={handleChange}
        checked={isDark}
        checkedChildren={<FaMoon size={16} css={css(styles.icon)} />}
        unCheckedChildren={<FaSun size={16} css={css(styles.icon)} />}
        css={css(styles.switch)}
      />
    </Box>
  )
}
