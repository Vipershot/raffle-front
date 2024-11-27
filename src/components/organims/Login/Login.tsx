import { DataForm } from "../../../interface/login"
import { FormLogin } from "../../molecules/FormLogin/FormLogin"

export const Login = () => {

  const handleLogin = (dataForm:DataForm)=> {
    console.log(dataForm)
}
  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-[700px]  ">
        <FormLogin onSubmit={handleLogin}/>

    </div>
  )
}
