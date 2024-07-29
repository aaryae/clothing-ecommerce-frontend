
import About from '@ui/landingPage/pages/About'
import LandingPage from '@ui/landingPage/pages/LandingPage'
import LandingTemplate from '@ui/landingPage/templates/LandingTemplate'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingTemplate />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: '/about', element: <About /> },
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
