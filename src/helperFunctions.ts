import { Helmet } from "react-helmet";

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