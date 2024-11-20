import {  Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import CarouselDetails from '../components/molecules/Details/Details'
import dataTest from '../utils/items'


const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<AppRoutes />} />
            <Route path="/carousel/:id" element={<CarouselDetails dataTest={dataTest} />} />
        </Routes>
    )
}
export default AppRouter