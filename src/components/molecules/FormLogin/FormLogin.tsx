import { AppButton } from "../../atoms/AppButton/AppButton"
import { AppInput } from "../../atoms/AppInput/AppInput"



export const FormLogin = () => {
  return (
   <form className="flex flex-col gap-5 w-1/4">
     <AppInput label="Email" placeholder="Ingresa email" onChange={()=>{}} />
     <AppInput label="Password" placeholder="Ingresa password" onChange={()=>{}} />
     <AppButton onClick={()=>{}} title="Ingresar"/>
   </form>
  )
}
