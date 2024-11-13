import { FormRegister } from "../../molecules/FormRegister/FormRegister"

type DataForm = {
    name: string
    email: string
    password: string
}

export const Register = () => {
  
    const handleRegister = (dataForm:DataForm)=> {
        console.log(dataForm)
    }

  return (
    <div className=" flex justify-center items-center min-h-screen  ">
    <FormRegister onSubmit={handleRegister} />
</div>
  )
}
