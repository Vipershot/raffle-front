import { Login } from "../organims/Login/Login"

import raffle from '../../assets/banner1.png'

export const LoginTemplate = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
      <Login/>
      </div>
   
      <div style={{backgroundImage:`url(${raffle})`}} className="border sm:d-none" >

      </div>
    </div>
  )
}
