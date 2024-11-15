import { Route, Routes } from "react-router-dom";
import { ViewLogin, ViewRegister, ViewDashboard } from "../views";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<ViewDashboard/>} />
        <Route path="/register" element={<ViewRegister />} />
        <Route path="/login" element={<ViewLogin/>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
