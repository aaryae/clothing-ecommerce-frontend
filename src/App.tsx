
import About from '@ui/landingPage/pages/About'
import LandingPage from '@ui/landingPage/pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
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
