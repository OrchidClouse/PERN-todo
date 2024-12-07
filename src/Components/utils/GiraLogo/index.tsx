// @ts-ignore
import logo from "../../../Logo/vector/default-monochrome.svg"
import { ReactSVG } from 'react-svg'

type IDefaultLogoProps = {
    width?: string,
    margin?: string
}

export const DefaultLogo: React.FC<IDefaultLogoProps> = ({width, margin}) => {
  return (
        <ReactSVG
        onError={() => console.log('Error logo')}
        src={logo}
        className={`${width} mx-auto ${margin}`}
        />
  )
}
