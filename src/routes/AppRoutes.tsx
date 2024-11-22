import { Route, Routes } from "react-router-dom";
import { ViewLogin, ViewRegister, ViewDashboard, ViewMostRecent, ViewBestPrices, ViewAdward, ViewPayment } from "../views";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/">
        <Route index element={<ViewDashboard/>} />
        <Route path="/register" element={<ViewRegister />} />
        <Route path="/login" element={<ViewLogin/>} />
        <Route path="/payment/:id" element={<ViewPayment/>} />
        <Route path="/most-recent" element={<ViewMostRecent/>} />
        <Route path="/best-prices" element={<ViewBestPrices/>} />
        <Route path="/award/:id" element={<ViewAdward />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
