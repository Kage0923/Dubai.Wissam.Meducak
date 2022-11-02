export default (image, variant) =>
  image
    ? image.__typename
      ? image[`${image.__typename}_${variant}`]
      : image[variant]
    : null
