import {  Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import CarouselDetails from '../components/molecules/Details/Details'
import dataTest from '../utils/items'
import { Layout } from '../components/Layout/Layout'


const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<Layout>
                <AppRoutes />
            </Layout>} />
            <Route path="/carousel/:id" element={<CarouselDetails dataTest={dataTest} />} />
        </Routes>
    )
}
export default AppRouter