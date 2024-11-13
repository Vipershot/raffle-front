import { DataForm } from "../../../interface/login"
import { FormLogin } from "../../molecules/FormLogin/FormLogin"



export const Login = () => {

  const handleLogin = (dataForm:DataForm)=> {
    console.log(dataForm)
}
  return (
    <div className=" flex justify-center items-center min-h-screen  ">
        <FormLogin onSubmit={handleLogin}/>
    </div>
  )
}
