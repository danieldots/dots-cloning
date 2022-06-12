const breakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
}

export const onSmall = `@media only screen and (min-width: ${breakpoints.sm})`
export const onMedium = `@media only screen and (min-width: ${breakpoints.md})`
export const onLarge = `@media only screen and (min-width: ${breakpoints.lg})`
export const onXLarge = `@media only screen and (min-width: ${breakpoints.xl})`
export const onXXLarge = `@media only screen and (min-width: ${breakpoints.xxl})`
