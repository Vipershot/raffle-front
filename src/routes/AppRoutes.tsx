import { Route, Routes } from "react-router-dom";
import { ViewLogin, ViewRegister, ViewDashboard, ViewMostRecent } from "../views";
import { Payment } from "../components/organims/Payment/Payment";


const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<ViewDashboard/>} />
        <Route path="/register" element={<ViewRegister />} />
        <Route path="/login" element={<ViewLogin/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/most-recent" element={<ViewMostRecent/>} />

      </Route>
    </Routes>
  );
};
export default AppRoutes;
