import { Register } from "../organims/Register/Register"
import raffle from '../../assets/banner1.png'

export const RegisterTemplate =()=>{
    return <>
     <div className="grid md:grid-cols-2 gap-4">
     
   
      <div style={{backgroundImage:`url(${raffle})`}} className="border sm:d-none" >

      </div>
      <div>
      <Register/>
      </div>
    </div>

    </>
}