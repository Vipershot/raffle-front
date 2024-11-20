import { Link } from "react-router-dom"
import { TitleText } from "../TitleText/TitleText"

export const AppFooter = () => {
  return (
    <Link to='/'>
        <div className='h-60 bg-primary flex justify-center items-center'> 
            <TitleText text={"Raffle"} />
        </div>
    </Link>
  )
}
