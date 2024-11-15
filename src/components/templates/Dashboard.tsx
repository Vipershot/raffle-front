import { IItemCarousel } from "../../interface/ICarousel"
import AppCarousel from "../organims/AppCarousel/AppCarousel"
import { ContentDashboard } from "../organims/ContentDashboard/ContentDashboard"

export const Dashboard = () => {
    const dataTest: IItemCarousel[] =[{
        title:'test 1',
        description: 'description 1',
        date: 'date 1',
        imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/268/357/small/ai-generated-car-white-car-suv-car-sport-utility-vehicle-white-suv-car-white-sport-utility-vehicle-suv-car-transparent-background-png.png'
      },
      {
        title:'test 2',
        description: 'description 2',
        date: 'date 2',
        imgUrl: 'https://static.vecteezy.com/system/resources/previews/027/232/228/non_2x/sports-motorbike-sports-bike-sports-motorbike-transparent-background-ai-generated-free-png.png'
      },
      {
        title:'test 3',
        description: 'description 3',
        date: 'date 3',
        imgUrl: 'https://koodoo.co.za/cdn/shop/files/PS5-Slim-Digital-Mega-Bundle.png?v=1712732337'
      },
      {
        title:'test 4',
        description: 'description 4',
        date: 'date 4',
        imgUrl: 'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-smart-home-air-fryer-3d-illustration-png-image_11596032.png'
      }] 
    
  return (
    <div>
        <AppCarousel data={dataTest}/>
        <ContentDashboard/>
    </div>
  )
}
