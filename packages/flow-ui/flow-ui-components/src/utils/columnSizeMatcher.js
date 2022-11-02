//Responsive flex sizes based on theme-ui sizes (theme.sizes)
export default columns => {
  if (!Array.isArray(columns) || columns.length <= 0) return

  let columnSizes

  const sizes = {
    1: `full`,
    2: `1/2`,
    3: `1/3`,
    4: `1/4`,
    5: `1/5`
  }
  columnSizes = {
    flexBasis: [
      sizes[columns[0]],
      sizes[columns[1]],
      sizes[columns[2]],
      sizes[columns[3]]
    ]
  }

  return columnSizes
}
