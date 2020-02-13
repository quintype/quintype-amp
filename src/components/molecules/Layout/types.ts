import { ReactElement } from 'react'

export interface Layout {
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement | string;
  customStyles?: string;
}
