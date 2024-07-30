import About from '@ui/landingPage/pages/About'
import AllProduct from '@ui/landingPage/pages/AllProduct'
import LandingPage from '@ui/landingPage/pages/LandingPage'
import MenProduct from '@ui/landingPage/pages/MenProduct'
import WomenProduct from '@ui/landingPage/pages/WomenProduct'
import LandingTemplate from '@ui/landingPage/templates/Landing.template'
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
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
