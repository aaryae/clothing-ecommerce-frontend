import Sectionintro from '@ui/landingPage/organsims/Sectionintro'
import About from '@ui/landingPage/pages/About'
import Landingtemplate from '@ui/landingPage/templates/Landingtemplate'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landingtemplate />,
      children: [
        { index: true, element: <Sectionintro /> },
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
