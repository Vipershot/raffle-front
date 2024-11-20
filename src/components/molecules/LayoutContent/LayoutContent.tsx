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
        <main className='px-60 py-20 mt-5 bg-light'>
            <TitleText text={title} />
            <main className='flex flex-wrap gap-2 gap-y-10'>
                {children}
            </main>
        </main>
        <footer className='p-10'>
            <AppSectionFooter loading={loading} title={titleFooter} link="/most-recent">
                    {dataFooter.map(({title, cover, id}) => <Link to={`/award/${id}`}><img src={cover} alt={title} width={'100%'}/></Link>)}
            </AppSectionFooter>
        </footer>
    </div>
  )
}