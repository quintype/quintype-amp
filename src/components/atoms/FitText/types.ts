import { ReactElement } from 'react'
import { Common } from '../commonTypes'

export interface FitTextTypes extends Common {
  "min-font-size"?: string;
  "max-font-size"?: string;
  children?: JSX.Element[] | JSX.Element | ReactElement;
}