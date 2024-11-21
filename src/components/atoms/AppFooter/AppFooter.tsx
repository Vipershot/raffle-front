import { Link } from "react-router-dom"
import { TitleText } from "../TitleText/TitleText"

export const AppFooter = () => {
  return (
    <Link to='/'>
        <div className='h-60 bg-info flex  items-start p-10 '> 
            <TitleText text={"Raffle"} color="light"/>
        </div>
    </Link>
  )
}
