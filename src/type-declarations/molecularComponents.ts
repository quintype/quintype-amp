import { ReactElement } from 'react'

export interface Blurb {
  children?: string|HTMLElement;
}
export interface BlockQuote {
  children?: string|HTMLElement;
}
export interface Layout {
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement | string;
  customStyles?: string;
}
export interface AppContextInterface {
  ignoreDefaultStyles: boolean;
}