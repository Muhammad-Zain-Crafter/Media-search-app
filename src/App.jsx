import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './home/HomePage.jsx'
import CollectionPage from './home/CollectionPage.jsx'
import Navbar from './components/Navbar.jsx'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar/>
         <HomePage/>
      </div>
     
    },
    {
      path: '/collection',
      element: <div>
        <Navbar/>
         <CollectionPage/>
      </div>
    }

  ])
  return (
    <div className='min-h-screen w-full bg-gray-950 text-white'>
      <RouterProvider router={router}/>

      <ToastContainer/>
    </div>
  )
}

export default App
