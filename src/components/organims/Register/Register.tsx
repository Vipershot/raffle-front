import AppModal from "../../atoms/AppModal/AppModal"
import { FormRegister } from "../../molecules/FormRegister/FormRegister"
import { AppButton } from "../../atoms/AppButton/AppButton"
import { useNavigate } from "react-router-dom"
import { useModal } from "../../../hooks/useModal"
import { useState } from "react"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { IUserAuth } from "../../../interface/login"
import { registerUser } from "../../../services/auth"



export const Register = () => {
    const {isModalOpen, openModal} = useModal()
    const [message, setMessage] = useState<{title:string; description:string, icon: React.ReactNode} | null>(null)
    const navigate = useNavigate()
    const handleRegister = async(dataForm:IUserAuth)=> {
      try {
        const res = await registerUser(dataForm)
        console.log(res)
        setMessage({title:"Usuario Registrado", description:"Registro completado con exito", icon: <IoIosCheckmarkCircle  className="inline-block ml-2 text-info" size={30} />})
        openModal()
         
      } catch (error) {
        setMessage({title:"Error al registrar", description:"Registro fallido intente de nuevo", icon: <IoIosCloseCircle  className="inline-block ml-2 text-info" size={30} />})
        openModal()
          console.log(error)
      }
   
    }

  return (
    <div className=" flex flex-col gap-5 justify-center items-center  h-[700px]   ">
    <FormRegister onSubmit={handleRegister} />
    <div>
    {message && <AppModal
          open={isModalOpen}
      
          title={
            <>
            {message.icon}  {message.title} 
            </>
          }
  
        >
          <div className="space-y-4">
            <p className="text-dark">{message.description}</p>
      
            <AppButton
              size="full"
              onClick={() => navigate("/login")}
              title="Confirmar"
            />
          </div>
        </AppModal>}
      </div>
</div>
  )
}
