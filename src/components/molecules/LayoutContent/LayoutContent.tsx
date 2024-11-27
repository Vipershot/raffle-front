import { ReactNode } from 'react'
import { TitleText } from '../../atoms/TitleText/TitleText'
import { IAward } from '../../../interface/awards'
import { AppSectionFooter } from '../../atoms/AppSectionFooter/AppSectionFooter'
import { Link } from 'react-router-dom'
interface Props {
    title:string
    titleFooter?:string
    dataFooter: IAward[]
    loading:boolean
    children:ReactNode
}
export const LayoutContent = ({title,titleFooter = "Otros productos", dataFooter,loading,children}:Props) => {
  return (
    <div>
        <div className='py-5 px-[10px] md:px-60 md:py-20  mt-5 bg-light'>
            <TitleText text={title} />
<<<<<<< HEAD
            <div className='flex flex-wrap gap-2 gap-y-10 mt-5'>
=======
            <main className='flex flex-wrap  gap-2 gap-y-10 mt-5'>
>>>>>>> 33fb704b487f0ef6211cad765c8d820c3c816369
                {children}
            </div>
        </div>
        <footer className='py-3 md:py-10'>
            <AppSectionFooter loading={loading} title={titleFooter} link="/most-recent">
                    {dataFooter.map(({title, cover, id}) => <Link key={id} to={`/award/${id}`}><img src={cover} alt={title} width={'100%'}/></Link>)}
            </AppSectionFooter>
        </footer>
    </div>
  )
}
