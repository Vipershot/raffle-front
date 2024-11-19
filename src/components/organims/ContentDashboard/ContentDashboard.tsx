
import { IItemCarousel } from '../../../interface/ICarousel'
import { AppSection } from '../../atoms/AppSection/AppSection'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'
export const ContentDashboard = () => {
  const dataTest: IItemCarousel[] =[{
    tickets:10,
    title:'test 1',
    description: 'description 1',
    date: 'date 1',
    imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/268/357/small/ai-generated-car-white-car-suv-car-sport-utility-vehicle-white-suv-car-white-sport-utility-vehicle-suv-car-transparent-background-png.png',
    price:20
  },
  {
    tickets:10,
    title:'test 2',
    description: 'description 2',
    date: 'date 2',
    imgUrl: 'https://static.vecteezy.com/system/resources/previews/027/232/228/non_2x/sports-motorbike-sports-bike-sports-motorbike-transparent-background-ai-generated-free-png.png',
    price:20
  },
  {
    tickets:10,
    title:'test 3',
    description: 'description 3',
    date: 'date 3',
    imgUrl: 'https://koodoo.co.za/cdn/shop/files/PS5-Slim-Digital-Mega-Bundle.png?v=1712732337',
    price:20
  },
  {
    tickets:10,
    title:'test 4',
    description: 'description 4',
    date: 'date 4',
    imgUrl: 'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-smart-home-air-fryer-3d-illustration-png-image_11596032.png',
    price:20
  }] 
  return (
    <div className='flex flex-col gap-y-10 my-10'>
        <AppSection title="Mas Recientes" link="/register">
                {dataTest.map(({title,tickets, price, description, date, imgUrl}) => <CardProduct 
                    tickets={tickets} 
                    description={`${title} - ${description}`} 
                    price={price} 
                    dateEnd={date} 
                    imgUrl={imgUrl}
                />)}
            
        </AppSection>
        <AppSection title="Por terminar" link="/register">
        {dataTest.map(({title,tickets, price, description, date, imgUrl}) => <CardProduct 
                    tickets={tickets} 
                    description={`${title} - ${description}`} 
                    price={price} 
                    dateEnd={date} 
                    imgUrl={imgUrl}
                />)}
            
        </AppSection>
    </div>
  )
}
