import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import LayoutAdmin from "./layouts/layout.main";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import UserManagement from "./containers/DashboardAdmin/User/UserManagement";
import DashboardAdmin from "./containers/DashboardAdmin";
import OrderManagement from "./containers/DashboardAdmin/Order/OrderManagement";
import CategoryManagement from "./containers/DashboardAdmin/Category/CategoryManagement";
import CourseLayout from "./containers/DashboardAdmin/Course/CourseLayout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <LayoutAdmin />,
  },
  {
    path: "/dashboard/users",
    element: <UserManagement />,
  },

  // {
  //   path: '/signup',
  //   element: <SignupPage />,
  // }
]);
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Route element={<LayoutAdmin />}>
              <Route index element={<DashboardAdmin />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
              <Route path="courseLayout" element={<CourseLayout />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
