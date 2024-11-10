import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLyout from './Comonents/Layouts/MainLyout';
import Home from './Comonents/Home/Home';
import Login from './Comonents/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout></MainLyout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/Login',
        element:<Login></Login>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
