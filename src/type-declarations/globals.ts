import * as atoms from './atomicComponents'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": atoms.Image,
      "amp-youtube": atoms.Youtube,
      "amp-carousel": atoms.Carousel,
      "amp-fit-text": atoms.FitText,
    }
  }
}
