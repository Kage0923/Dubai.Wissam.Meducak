import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton } from 'theme-ui'
import { FaBars, FaTimes } from 'react-icons/fa'

const styles = {
  panel: {
    position: `fixed`,
    top: 0,
    right: 0,
    transform: `translate(100%, 0)`,
    width: `75%`,
    height: `100vh`,
    bg: `contentBg`,
    transition: `all .5s cubic-bezier(.77,0,.175,1)`,
    zIndex: 99,
    open: {
      transform: `translate(0, 0)`,
      boxShadow: `0 0 45px 0 rgba(0,0,0,.25)`
    }
  },
  panelContent: {
    position: `relative`,
    height: `100%`,
    zIndex: 2,
    bg: `contentBg`,
    overflowY: `scroll`,
    fontSize: 3,
    p: 5
  },
  overlay: {
    position: `fixed`,
    top: 0,
    right: `100%`,
    size: `100%`,
    bg: `#222`,
    opacity: 0,
    transition: `opacity .5s cubic-bezier(.77,0,.175,1)`,
    zIndex: 90
  },
  overlayOpen: {
    right: 0,
    opacity: 0.9
  },
  handler: {
    display: ['', null, 'none'], //to avoid ssr rehydration issue
    transition: `left 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)`,
    left: -4
  },
  handlerOpen: {
    position: `fixed`,
    zIndex: 99999,
    left: 4,
    top: 4
  }
}

const Drawer = ({ container, width, ...props }) => {
  const [open, setOpen] = useState(false)

  const handleSwitch = () => {
    setOpen(!open)
  }

  const handlerStyle = open
    ? {
        ...styles.handler,
        ...styles.handlerOpen
      }
    : styles.handler

  const handler = (
    <IconButton
      onClick={handleSwitch}
      sx={handlerStyle}
      aria-label='Menu'
      {...props}
    >
      {open ? <FaTimes /> : <FaBars />}
    </IconButton>
  )

  return (
    <>
      {handler}
      <Box sx={{ ...styles.panel, ...(open && styles.panel.open) }}>
        <Box sx={styles.panelContent}>{open && props.children}</Box>
      </Box>
      <Box
        sx={{ ...styles.overlay, ...(open && styles.overlayOpen) }}
        onClick={handleSwitch}
      />
    </>
  )
}

export default Drawer

Drawer.defaultProps = {
  width: 300,
  container: null
}

Drawer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  container: PropTypes.instanceOf(PropTypes.element)
}
