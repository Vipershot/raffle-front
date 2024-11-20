import { ReactNode } from 'react'
import { TitleText } from '../../atoms/TitleText/TitleText'
import { AppSection } from '../../atoms/AppSection/AppSection'
import { CardProduct } from '../CardProduct/CardProduct'
import { IAward } from '../../../interface/awards'
interface Props {
    title:string
    dataFooter: IAward[]
    loading:boolean
    children:ReactNode
}
export const LayoutContent = ({title,dataFooter,loading,children}:Props) => {
  return (
    <div>
        <main className='px-60 py-20 mt-5 bg-dark'>
            <TitleText text={title} />
            <main className='flex flex-wrap gap-2 gap-y-10'>
                {children}
            </main>
        </main>
        <footer className='py-10 mt-5'>
            <AppSection loading={loading} title="Otros productos" link="/most-recent">
                    {dataFooter.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
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
        </footer>
    </div>
  )
}
