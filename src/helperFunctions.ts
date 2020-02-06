import { Helmet } from "react-helmet";
import { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'
import ReactDOMServer from 'react-dom/server'


export const getHelmetStr = () => {
  const helmet = Helmet.renderStatic()
  let str = ''

  const title = helmet.title.toString()
  const script = helmet.script.toString()

  str += `${title}${script}`
  return str


  // Object.keys(helmet)
  //   .filter(key => ["style", "title", "meta", "script"].includes(key))
  //   .forEach(key => {
  //     console.log(`Adding ${helmet[key]} to head`)
  //     str += helmet[key].toString()
  //   })
  // return str
}

export const getHtmlAndStyles = (component: ReactElement) => {
  // string replace is dirty but cant think of any other way
  const sheet = new ServerStyleSheet()
  const componentHtml = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(component))
  const styleTags = sheet.getStyleTags()
  const styles = styleTags.replace(/^<style[^>]*/, `<style amp-custom`)
  const styles2 = styles.replace(/data-styled[^}]*}/g, '')
  sheet.seal()
  return {
    htmlStr: componentHtml,
    customStyleStr: styles2
  }
}
