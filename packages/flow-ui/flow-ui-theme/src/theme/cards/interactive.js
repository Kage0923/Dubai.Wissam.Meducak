export default {
  variant: 'cards.primary',
  '@media (hover: hover) and (pointer: fine)': {
    ':hover': {
      transform: `translateY(-0.25rem)`,
      boxShadow: `
			0px 2px 4px rgba(46,41,51,0.08),
			0px 5px 10px rgba(71,63,79,0.16)
		`
    }
  }
}
