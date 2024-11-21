import {  Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import CarouselDetails from '../components/molecules/AwardDetails/AwardDetails'
import dataTest from '../utils/items'
import { Layout } from '../components/Layout/Layout'


const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<Layout>
                <AppRoutes />
            </Layout>} />
            <Route path="/awards/:id" element={<CarouselDetails dataTest={dataTest} />} />
        </Routes>
    )
}
export default AppRouter