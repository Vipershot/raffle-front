import {  Route, Routes } from 'react-router-dom'
import AppRoutes from './AppRoutes'

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<AppRoutes />} />
        </Routes>
    )
}
export default AppRouter