import { Route, Routes } from "react-router-dom";
import { ViewLogin, ViewRegister, ViewDashboard, ViewMostRecent, ViewBestPrices, ViewAdward, ViewPayment } from "../views";
import { ViewErrorPage } from "../views/ViewErrorPage";
import { ViewHistory } from "../views/ViewHistory";
// import { ViewWinners } from "../views/ViewWinners";

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
        <Route path="/award/:*" element={<ViewErrorPage />} />
        <Route path="*" element={<ViewErrorPage/>} />
        <Route path="/history" element={<ViewHistory/>} />
        {/* <Route path="/winners" element={<ViewWinners/>} /> */}

      </Route>
    </Routes>
  );
};
export default AppRoutes;
