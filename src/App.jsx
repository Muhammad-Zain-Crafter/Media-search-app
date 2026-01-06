import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './home/HomePage.jsx'
import CollectionPage from './home/CollectionPage.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/collection',
      element: <CollectionPage/>
    }

  ])
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
