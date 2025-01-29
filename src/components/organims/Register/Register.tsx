import AppModal from "../../atoms/AppModal/AppModal"
import { FormRegister } from "../../molecules/FormRegister/FormRegister"
import { AppButton } from "../../atoms/AppButton/AppButton"
import { useNavigate } from "react-router-dom"
import { useModal } from "../../../hooks/useModal"
import { useState } from "react"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { registerUser } from "../../../services/auth"
import { IUserAuth } from "../../../interface/login"




export const Register = () => {
    const {isModalOpen, openModal, closeModal} = useModal()
    const [message, setMessage] = useState<{title:string; description:string, icon: React.ReactNode, error:boolean} | null>(null)
    const navigate = useNavigate()
    const handleRegister = async(data: IUserAuth)=> {
      try {
        await registerUser(data)
        setMessage({title:"Usuario Registrado", description:"Registro completado con exito", icon: <IoIosCheckmarkCircle  className="inline-block ml-2 text-info" size={30} />, error: false})
        openModal()
         
      } catch (error) {
        setMessage({title:"Error al registrar", description:"Registro fallido intente de nuevo", icon: <IoIosCloseCircle  className="inline-block ml-2 text-info" size={30} />, error: true})
        openModal()
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
              onClick={() => {
                if(message.error){
                  closeModal()
                }else{
                  navigate("/login")
                }
              }}
              title={message.error ? "Cerrar" :"Confirmar"}
            />
          </div>
        </AppModal>}
      </div>
</div>
  )
}
