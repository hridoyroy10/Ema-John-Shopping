import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './componets/About/About'
import Main from './componets/layout/Main'
import Orders from './componets/Orders/Orders'
import Shope from './componets/Shope/Shope'
import Inventory from './componets/Inventory/Inventory'
import { loaderAddedToCart } from './componets/Loadrer/loaderAddedToCart';

function App() {
  const [count, setCount] = useState()

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children:[
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/shope',
          loader:()=>fetch('products.json'),
          element:<Shope/>
        },
        {
          path:'orders',
          loader:loaderAddedToCart,
          element:<Orders/>
        },
        {
          path:'inventory',
          element:<Inventory/>
        },
      ]
    },
   
    
    
  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
