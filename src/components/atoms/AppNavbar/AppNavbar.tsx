import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TitleText } from '../TitleText/TitleText'
import { AppButton } from '../AppButton/AppButton'
import { AppInput } from '../AppInput/AppInput';
import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';

export const AppNavbar = () => {
  const {handleModal} = useContext(ModalContext)
  const navigate = useNavigate();
  const {pathname} = useLocation()
  return (
    <nav className='p-10 bg-white shadow-md flex justify-between'>
      <Link to={'/'}>
        <TitleText text={'Raffle'} color='primary'/>
      </Link>
      {
        pathname !== '/login' &&  pathname !== '/register'  && <div className='w-[60%]'>
        <AppInput onChange={handleModal} onClick={handleModal} label={''} placeholder={'Buscar...'} />
      </div>
      }
      
      <div className="flex space-x-2">
      <AppButton onClick={()=>{navigate("/login")}} title='Inicia sesion' size='md' appearance='text'/>
      <AppButton onClick={()=>{navigate("/register")}} title='Registrar' appearance='text'/>
      </div>
    </nav>
  )
}
