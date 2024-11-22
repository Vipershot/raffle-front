import {  Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import { Layout } from '../components/Layout/Layout'


const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<Layout>
                <AppRoutes />
            </Layout>} />
        </Routes>
    )
}
export default AppRouter