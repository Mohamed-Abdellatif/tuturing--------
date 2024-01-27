import React from 'react'
import ReactDOM from 'react-dom/client'



import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/home/home';
import Categories from './components/categories/categories';
import CoursePage from './components/coursePage/coursePage';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/categories",
    element: <Categories/>,
  },
  {
    path: "/course/:courseId",
    element: <CoursePage/>,
  },
  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
