import { AppButton } from "../../atoms/AppButton/AppButton"
import { FormRegister } from "../../molecules/FormRegister/FormRegister"
import { useNavigate } from 'react-router-dom';


type DataForm = {
    name: string
    email: string
    password: string
}

export const Register = () => {
  const navigate = useNavigate();
  
    const handleRegister = (dataForm:DataForm)=> {
        console.log(dataForm)
    }

  return (
    <div className=" flex flex-col gap-5 justify-center items-center min-h-screen  ">
    <FormRegister onSubmit={handleRegister} />
    <AppButton appearance="text" title={"Login"} onClick={()=>navigate('/')}/>
</div>
  )
}
