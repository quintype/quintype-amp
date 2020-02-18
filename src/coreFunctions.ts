import { ReactElement } from 'react'
import { headStart, headEndBodyStart, bodyEnd } from './boilerplate'
import { getHeadTags, getHtmlAndDefaultStyles } from './helperFunctions'

// const checkLayout = () => {
//   // this should perform checks to decide whether the layout (i.e. stuff inside the accumulator) is fit for
//   // rendering into an amp page or not, else it should return an error object with a proper message
//   return accumulator.title ? null : new Error('Title is mandatory. It is not set')
// }

export function renderToString (component: ReactElement) {
  // check if layout can be rendered (i.e. if title and stuff is present), else throw error
  let str = ''
  try {
    // const check = checkLayout()
    // if (check instanceof Error) throw check
    const {title, script, customStyles} = getHeadTags()
    const {htmlStr, defaultStyles} = getHtmlAndDefaultStyles(component)

    str += headStart
    str += `${title}${script}`
    str += customStyles || defaultStyles
    str += headEndBodyStart
    str += htmlStr
    str += bodyEnd
    return str

  } catch(e) { 
    return e
   }
}
