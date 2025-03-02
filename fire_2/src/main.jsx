import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Product  from './pages/Product.jsx'
import './index.css'
import Contact from './pages/ContactPage.jsx'
import DetailsProduct from './pages/DetailsProduct.jsx'
import Home from './pages/Home.jsx'

  const router=createBrowserRouter([
    {
      path:"/",
      element:(
        <Home/>
      )
    },
    {
      path:"/product",
      element:(
        <Product/>
      )
    },
      {
      path:"/contact",
      element:(
        <Contact  />
      )
    },
    {
      path:"/product/:id",
      element:(
        <DetailsProduct  />
      )
    },
    
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
