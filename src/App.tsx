import About from '@ui/landingPage/pages/About'
import LandingPage from '@ui/landingPage/pages/LandingPage'
import WomenProduct from '@ui/landingPage/pages/WomenProduct'
import LandingTemplate from '@ui/landingPage/templates/Landing.template'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingTemplate />,
      children: [
        { index: true, element: <LandingTemplate /> },
        { path: '/about', element: <About /> },
        { path: '/womenproducts', element: <WomenProduct /> },
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
