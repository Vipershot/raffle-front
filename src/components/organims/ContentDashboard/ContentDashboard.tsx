
import { useEffect, useState } from 'react'
import { AppSection } from '../../atoms/AppSection/AppSection'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'
import { getLowestPrice, getMostRecent } from '../../../services/awards'
import { IAward } from '../../../interface/awards'
export const ContentDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [mostRecent, setMostRecent] = useState<IAward[]>([]);
  const [lowestPrice, setLowestPrice] = useState<IAward[]>([]);

  const loadAwards = async() => {
    setLoading(true)
    const mostRecent = await getMostRecent()
    const lowestPrice = await getLowestPrice()
    setMostRecent(mostRecent)
    setLowestPrice(lowestPrice)
    setLoading(false)
  }
  useEffect(() => {
    loadAwards()
  }, []);
  
  return (
    <div className='flex flex-col gap-y-10 py-10 md:px-52 sm:px-0'>
        <AppSection loading={loading} title="Mas Recientes" link="/most-recent">
                {mostRecent.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={totalTickets} 
                    description={`${title} - ${description}`} 
                    ticketPrice={ticketPrice} 
                    endDate={endDate} 
                    createdAt={createdAt}
                    cover={cover}
                    id={id}
                    key={id}
                />)}
            
        </AppSection>
        <AppSection loading={loading} title="Mejores precios" link="/best-prices">
        {lowestPrice.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={totalTickets} 
                    description={`${title} - ${description}`} 
                    ticketPrice={ticketPrice} 
                    endDate={endDate} 
                    createdAt={createdAt}
                    cover={cover}
                    id={id}
                    key={id}

                />)}
            
        </AppSection>
    </div>
  )
}
