import { Login } from "../organims/Login/Login"

import raffle from '../../assets/image2.png'

export const LoginTemplate = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
      <Login/>
      </div>
   
      <div style={{
  backgroundImage: `url(${raffle})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
}} className=" sm:d-none" >

      </div>
    </div>
  )
}
