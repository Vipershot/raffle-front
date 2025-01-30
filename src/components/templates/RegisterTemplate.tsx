import { Register } from "../organims/Register/Register"
import raffle from '../../assets/image.png'

export const RegisterTemplate =()=>{
    return <>
     <div className="grid md:grid-cols-2 gap-4">
     
   
      <div style={{
  backgroundImage: `url(${raffle})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
}} className="  sm:d-none" >

      </div>
      <div>
      <Register/>
      </div>
    </div>

    </>
}