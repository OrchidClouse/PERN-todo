import React from 'react'
import logo from "../../Logo/vector/default-monochrome.svg"
import { ReactSVG } from 'react-svg'

// w-32 mt-10
const DefaulLogo = ({width, margin}) => {
  return (
        <ReactSVG
        onError={() => console.log('Error logo')}
        src={logo}
        className={`${width} mx-auto ${margin}`}
        />
  )
}

export default DefaulLogo
