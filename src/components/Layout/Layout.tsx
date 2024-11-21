import { ReactNode } from 'react'
import { AppFooter } from '../atoms/AppFooter/AppFooter'
import { AppNavbar } from '../atoms/AppNavbar/AppNavbar'
interface Props{
    children:ReactNode
}
export const Layout = ({children}:Props) => {
  return (
    <div>
        <AppNavbar/>
        <main className='min-h-screen'>
          {children}
        </main>
        <AppFooter/>
    </div>
  )
}
