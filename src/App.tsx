import About from '@ui/landingPage/pages/About'
import AllProduct from '@ui/landingPage/pages/AllProduct'
import Checkout from '@ui/landingPage/pages/Checkout'
import LandingPage from '@ui/landingPage/pages/LandingPage'
import Login from '@ui/landingPage/pages/Login'
import MenProduct from '@ui/landingPage/pages/MenProduct'
import ProductDetails from '@ui/landingPage/pages/ProductDetails'
import Register from '@ui/landingPage/pages/Register'
import WomenProduct from '@ui/landingPage/pages/WomenProduct'
import LandingTemplate from '@ui/landingPage/templates/Landing.template'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingTemplate />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: '/about', element: <About /> },
        { path: '/womenproducts', element: <WomenProduct /> },
        { path: '/menproducts', element: <MenProduct /> },
        { path: '/products', element: <AllProduct /> },
        { path: '/products/:productId', element: <ProductDetails /> },
        { path: '/checkout', element: <Checkout /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
  ])

  return (
    <>
      <Toaster position='bottom-right' />
      <RouterProvider router={router} />
    </>
  )
}

export default App
