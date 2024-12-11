
import { useEffect, useState } from 'react'
import { AppSection } from '../../atoms/AppSection/AppSection'
import { CardProduct } from '../../molecules/CardProduct/CardProduct'
import { getLowestPrice, getMostRecent } from '../../../services/awards'
import { IAward } from '../../../interface/awards'
import { getProfile } from '../../../services/auth'
import AppModal from '../../atoms/AppModal/AppModal'
import { Terms } from './Value'
import { AppButton } from '../../atoms/AppButton/AppButton'

import { Loader } from '../../atoms/Loader/Loader'
export const ContentDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [mostRecent, setMostRecent] = useState<IAward[]>([]);
  const [lowestPrice, setLowestPrice] = useState<IAward[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);


  

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalOpen(false);
    setIsChecked(false);
  };

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
    getProfile()

  }, []);
  
  return (
    <div className='flex flex-col gap-y-10 py-10 lg:px-42 sm:px-0'>
      {loading ?<Loader/> : <>
      
      <AppSection loading={loading} title="Más recientes" link="/most-recent">
                {mostRecent.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={Number(totalTickets)} 
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
        <AppModal open={isModalOpen}  title={"Términos y condiciones"}>
          <div className="space-y-4 p-1">
            <p className="text-dark text-[12px]">
              Por favor lea atentamente nuestros términos y condiciones.
            </p>
           <Terms/>
           <label className="flex items-center space-x-2">
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          setTermsAccepted(e.target.checked);
        }}
        
      />
      <span className="text-[12px]">Acepto términos y condiciones</span>
    </label>

            <AppButton
              size="full"
              
              onClick={() => {handleCloseModal()}}
              title="Acepto terminos y condiciones"
              disabled={!termsAccepted}
              
            />
          </div>
        </AppModal>
      </>
      }
 
    </div>
  )
}
