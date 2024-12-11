


import { useEffect, useState } from 'react'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'
import {  getLowestPrice, getMostRecent } from '../../../services/awards'
import { IAward } from '../../../interface/awards'
import { LayoutContent } from '../../molecules/LayoutContent/LayoutContent'
import { Loader } from '../../atoms/Loader/Loader'


export const ContentMostRecentAwards = () => {
    const [loading, setLoading] = useState(false);
    const [mostRecent, setMostRecent] = useState<IAward[]>([]);
    const [dataFooter, setDataFooter] = useState([]);
    const loadAwards = async() => {
      setLoading(true)
      const mostRecent = await getMostRecent()
      const lowestPrice = await getLowestPrice()
      setMostRecent(mostRecent)
      setDataFooter(lowestPrice)
      setLoading(false)
    }
    useEffect(() => {
      loadAwards()
    }, []);
  return (<>
  {
    loading ? <Loader/> : <LayoutContent title={'Productos agregados más recientes'} dataFooter={dataFooter} loading={loading} grid>
    { mostRecent.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
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
  }
      
  </>

  )
}
