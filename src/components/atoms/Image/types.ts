import { Common } from '../commonTypes'

export interface ImageTypes extends Common {
  src?: string;
  srcset?: string;
  alt?: string;
  attribution?: string;
}