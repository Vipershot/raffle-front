


import { useEffect, useState } from 'react'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'
import {  getMostRecent } from '../../../services/awards'
import { IAward } from '../../../interface/awards'


export const ContentMostRecentAwards = () => {
    const [loading, setLoading] = useState(false);
    const [mostRecent, setMostRecent] = useState<IAward[]>([]);

    const loadAwards = async() => {
      setLoading(true)
      const mostRecent = await getMostRecent()
      setMostRecent(mostRecent)
      setLoading(false)
    }
    useEffect(() => {
      loadAwards()
    }, []);
  return (
    <div className='flex flex-wrap gap-2 gap-y-10 px-60 mt-5'>
        {loading ? 'Cargando...' :  mostRecent.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={totalTickets} 
                    description={`${title} - ${description}`} 
                    ticketPrice={ticketPrice} 
                    endDate={endDate} 
                    createdAt={createdAt}
                    cover={cover}
                    id={id}
                    key={id}
                />)}    
    </div>
  )
}
