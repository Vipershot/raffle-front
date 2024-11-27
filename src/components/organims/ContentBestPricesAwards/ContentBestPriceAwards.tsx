import { useEffect, useState } from 'react'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'
import {  getLowestPrice, getMostRecent } from '../../../services/awards'
import { IAward } from '../../../interface/awards'
import { LayoutContent } from '../../molecules/LayoutContent/LayoutContent'



export const ContentBestPriceAwards = () => {
    const [loading, setLoading] = useState(false);
    const [bestPrices, setBestPrices] = useState<IAward[]>([]);
    const [dataFooter, setDataFooter] = useState([]);

    const loadAwards = async() => {
      setLoading(true)
      const bestPrices = await getLowestPrice()
      const mostRecent = await getMostRecent()
      setBestPrices(bestPrices)
      setDataFooter(mostRecent)
      setLoading(false)
    }
    useEffect(() => {
      loadAwards()
    }, []);
  return (
    <LayoutContent title={'Productos con mejores precios'} dataFooter={dataFooter} loading={loading} grid>
        {loading ? 'Cargando...' :  bestPrices.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={totalTickets} 
                    description={`${title} - ${description}`} 
                    ticketPrice={ticketPrice} 
                    endDate={endDate} 
                    createdAt={createdAt}
                    cover={cover}
                    id={id}
                    key={id}
                />)}    
    </LayoutContent>
  )
}

