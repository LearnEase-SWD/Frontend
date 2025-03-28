import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import LayoutAdmin from "./layouts/layout.main";
import LoginPage from "./pages/LoginPage";
import UserManagement from "./containers/DashboardAdmin/User/UserManagement";
import DashboardAdmin from "./containers/DashboardAdmin";
import OrderManagement from "./containers/DashboardAdmin/Order/OrderManagement";
import CourseLayout from "./containers/DashboardAdmin/Course/CourseLayout";
import TopicManagement from "./containers/DashboardAdmin/Topic/TopicManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/callback">
            <Route element={<LayoutAdmin />}>
              <Route index element={<DashboardAdmin />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="topics" element={<TopicManagement />} />
              <Route path="courseLayout" element={<CourseLayout />} />
            </Route>
          </Route>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
