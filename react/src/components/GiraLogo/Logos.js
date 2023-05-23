import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../Logo/vector/default-monochrome.svg"
import { ReactSVG } from 'react-svg'


const DefaulLogo = () => {
  return (
    <Link to="/" className="mx-auto w-max">
        <ReactSVG
        onError={() => console.log('Error logo')}
        src={logo}
        className="w-32 mx-auto mt-10"
        />
    </Link>
  )
}

export default DefaulLogo
