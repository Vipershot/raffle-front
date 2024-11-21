import { Link } from 'react-router-dom'
import { TitleText } from '../TitleText/TitleText'

export const AppNavbar = () => {
  return (
    <nav className='p-10 bg-white shadow-md'>
      <Link to={'/'}>
        <TitleText text={'Raffle'} color='primary'/>
      </Link>
    </nav>
  )
}
