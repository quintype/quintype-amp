import * as components from './components'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": components.Image,
      "amp-youtube": components.Youtube,
      "amp-carousel": components.Carousel,
      "amp-fit-text": components.FitText,
    }
  }
}
