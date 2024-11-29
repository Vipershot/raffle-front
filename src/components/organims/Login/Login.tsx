import { useContext, useState } from "react"
import { useModal } from "../../../hooks/useModal"
import { IUserAuth } from "../../../interface/login"
import { FormLogin } from "../../molecules/FormLogin/FormLogin"
import { loginUser } from "../../../services/auth"
import { IoIosCloseCircle } from "react-icons/io"
import AppModal from "../../atoms/AppModal/AppModal"
import { AppButton } from "../../atoms/AppButton/AppButton"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"


export const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const {isModalOpen, openModal, closeModal} = useModal()
  const [message, setMessage] = useState<{title:string; description:string, icon: React.ReactNode} | null>(null)
  const handleLogin = async(dataForm:IUserAuth)=> {
    try {
      setLoading(true)
      const {token} = await loginUser(dataForm)
      login(token)
      navigate("/")
    } catch (e) {
      console.log(e)
      setMessage({title:"Error al iniciar sesion", description:"Intente de nuevo en un momento", icon: <IoIosCloseCircle  className="inline-block ml-2 text-info" size={30} />})
      openModal()
    }
 
}
  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-[700px]  ">
        <FormLogin onSubmit={handleLogin} loading={loading}/>
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
              onClick={closeModal}
              title="Confirmar"
            />
          </div>
        </AppModal>}
    </div>
  )
}
