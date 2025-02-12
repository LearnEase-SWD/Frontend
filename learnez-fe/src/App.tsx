
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutAdmin from './layouts/layout.main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutAdmin />,
  }
]);
function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
