import { Route, Routes } from "react-router-dom";
import { ViewLogin } from "../views";
import { ViewRegister } from "../views/ViewRegister";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ViewLogin />} />
        <Route path="/register" element={<ViewRegister />} />
        <Route path="/inventory" element={<h1>login</h1>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
