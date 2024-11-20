import AppCarousel from '../organims/AppCarousel/AppCarousel'
import { ContentMostRecentAwards } from '../organims/ContentMostRecentAwards/ContentMostRecentAwards'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'


export const MostRecentAwards = () => {
    const dataTest: {imgUrl:string}[] =[{
        imgUrl: banner1
      },
      {
        imgUrl: banner2
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

        <ContentMostRecentAwards/>
    </div>
  )
}
