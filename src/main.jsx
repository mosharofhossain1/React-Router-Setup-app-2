import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Bloge from './components/Bloge/Bloge.jsx'
import Products from './components/Products/Products.jsx'
import Contact from './components/Contact/Contact.jsx'
import MoreInfo from './components/MoreInfo/MoreInfo.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/bloge',
        element: <Bloge></Bloge>
      },
      {
        path: '/products',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element: <Products></Products>
      },
      {
        path: '/product/:productID',
        loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.productID}`),
        element: <MoreInfo></MoreInfo>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
