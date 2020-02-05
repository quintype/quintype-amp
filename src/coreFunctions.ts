import { ReactElement } from 'react'
import ReactDOMServer from 'react-dom/server'
import amphtmlValidator from "amphtml-validator"
import { headStart, headEndBodyStart, bodyEnd } from './boilerplate'
import { getHelmetStr } from './helperFunctions'

// const checkLayout = () => {
//   // this should perform checks to decide whether the layout (i.e. stuff inside the accumulator) is fit for
//   // rendering into an amp page or not, else it should return an error object with a proper message
//   return accumulator.title ? null : new Error('Title is mandatory. It is not set')
// }

export function renderToString (reactComponent: ReactElement) {
  // check if layout can be rendered (i.e. if title and stuff is present), else throw error
  let str = ''
  try {
    // const check = checkLayout()
    // if (check instanceof Error) throw check
    const headStr = getHelmetStr()
    const componentHtml = ReactDOMServer.renderToStaticMarkup(reactComponent)

    str += headStart
    str += headStr
    str += headEndBodyStart
    str += componentHtml
    str += bodyEnd
    return str

  } catch(e) { 
    console.log("something broke")
    console.error(e)
    return
   }
}

export async function validateAmpHtml (ampHtml: string) { // unit testing NOT DONE
  // async function that takes html string and returns boolean true if valid amp or an error object if invalid
  const validator = await amphtmlValidator.getInstance()
  const { status, errors = [] } = validator.validateString(ampHtml)
  let message = ""

  errors.length && errors.forEach(error => {
    message += `line ${error.line}, col ${error.col}, severity - ${error.severity}: ${error.message}\n`
    error.specUrl && (message += `( see ${error.specUrl} )\n`)
  })

  // return status === 'PASS' ? true : new Error(message)
  return !errors.length ? true : new Error(message)
}
