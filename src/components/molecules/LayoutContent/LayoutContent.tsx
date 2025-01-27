import { ReactNode } from 'react'
import { TitleText } from '../../atoms/TitleText/TitleText'
import { IAward } from '../../../interface/awards'
import { AppSectionFooter } from '../../atoms/AppSectionFooter/AppSectionFooter'
import { Link } from 'react-router-dom'
interface Props {
    title:string
    titleFooter?:string
    dataFooter?: IAward[]
    loading:boolean
    grid?:boolean
    children:ReactNode
}
export const LayoutContent = ({title,titleFooter = "Otros productos", dataFooter,loading,children, grid =false}:Props) => {
  return (
    <div>
        <div className='py-2 px-[10px] lg:px-60 md:py-10 bg-light'>
       <div className='flex flex-wrap justify-between'>
       <TitleText text={title} />
      
       </div>

            <div className={`${grid ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'flex flex-wrap justify-center'} gap-2 gap-y-10 mt-5`}>

                {children}
            </div>
          
        </div>
        
      {dataFooter &&  <footer className='py-3 md:py-10'>
            <AppSectionFooter loading={loading} title={titleFooter} link="/most-recent">
                    {dataFooter.map(({title, cover, id}) => <Link key={id} to={`/award/${id}`}><img src={cover} alt={title} className="h-[200px] w-[100%] object-contain"/></Link>)}
            </AppSectionFooter>
        </footer>}
    </div>
  )
}
