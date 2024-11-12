import {  Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<h1>index</h1>} />
                <Route path="/inventory" element={<h1>login</h1>} />
            </Route>
        </Routes>
    );
};
export default AppRoutes;