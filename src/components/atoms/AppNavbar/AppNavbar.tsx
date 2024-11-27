import { Link, useNavigate } from 'react-router-dom'
import { TitleText } from '../TitleText/TitleText'
import { AppButton } from '../AppButton/AppButton'

export const AppNavbar = () => {

  const navigate = useNavigate();
  return (
    <nav className='p-10 bg-white shadow-md flex justify-between'>
      <Link to={'/'}>
        <TitleText text={'Raffle'} color='primary'/>
      </Link>
      <div className="flex space-x-2">
      <AppButton onClick={()=>{navigate("/login")}} title='Inicia sesion' size='md' appearance='text'/>
      <AppButton onClick={()=>{navigate("/register")}} title='Registrar' appearance='text'/>
      </div>
    </nav>
  )
}
