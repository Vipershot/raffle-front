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
        {children}
        <AppFooter/>
    </div>
  )
}
