import { Route, Routes } from "react-router-dom";
import { ViewLogin } from "../views";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ViewLogin />} />
        <Route path="/inventory" element={<h1>login</h1>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
