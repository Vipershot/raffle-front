import { useNavigate } from 'react-router-dom';
import { DataForm } from "../../../interface/login"
import { FormLogin } from "../../molecules/FormLogin/FormLogin"
import { AppButton } from "../../atoms/AppButton/AppButton"



export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (dataForm:DataForm)=> {
    console.log(dataForm)
}
  return (
    <div className=" flex flex-col gap-5 justify-center items-center min-h-screen  ">
        <FormLogin onSubmit={handleLogin}/>
        <AppButton appearance="text" title={"Registrar"} onClick={()=>navigate('/register')}/>
    </div>
  )
}
