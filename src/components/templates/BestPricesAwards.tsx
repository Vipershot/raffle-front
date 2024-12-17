import AppCarousel from '../organims/AppCarousel/AppCarousel'
import banner1 from '../../assets/banner1.png'

import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import { ContentBestPriceAwards } from '../organims/ContentBestPricesAwards/ContentBestPriceAwards'


export const BestPricesAwards = () => {
    const dataTest: {imgUrl:string}[] =[{
        imgUrl: banner1
      },

      {
        imgUrl: banner3
      },
      {
        imgUrl: banner4
      }] 
    
  return (
    <div>
      <AppCarousel data={dataTest}/>

        <ContentBestPriceAwards/>
    </div>
  )
}
