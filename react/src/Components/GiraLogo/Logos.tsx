import React from 'react'
// @ts-ignore
import logo from "../../Logo/vector/default-monochrome.svg"
import { ReactSVG } from 'react-svg'

type Props = {
    width?: string,
    margin?: string
}
// w-32 mt-10
const DefaulLogo = (props: Props) => {
  return (
        <ReactSVG
        onError={() => console.log('Error logo')}
        src={logo}
        className={`${props.width} mx-auto ${props.margin}`}
        />
  )
}

export default DefaulLogo
