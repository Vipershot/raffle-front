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
    <div className=" flex flex-col gap-5 justify-center items-center  h-[700px]   ">
    <FormRegister onSubmit={handleRegister} />
</div>
  )
}
