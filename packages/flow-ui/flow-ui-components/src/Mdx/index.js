import { default as headings } from './Headings'
import { default as figure } from './Figure'
import { default as figcaption } from './Figcaption'
import { default as code } from './CodeBlock'

export default {
  figure,
  figcaption,
  pre: props => props.children,
  code,
  ...headings
}
