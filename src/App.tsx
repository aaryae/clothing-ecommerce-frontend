import About from '@ui/landingPage/pages/About'
import LandingPage from '@ui/landingPage/pages/LandingPage'
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
