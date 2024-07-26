import About from '@ui/landingPage/pages/About'
import Landingpage from '@ui/landingPage/pages/Landingpage'
import Landingtemplate from '@ui/landingPage/templates/Landingtemplate'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landingtemplate />,
      children: [
        { index: true, element: <Landingpage /> },
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
