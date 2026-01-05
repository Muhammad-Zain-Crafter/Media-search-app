import './App.css'
import ResultGrid from './components/ResultGrid.jsx'
import SearchBar from './components/SearchBar.jsx'
import Tabs from './components/Tabs.jsx'

function App() {

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
     <SearchBar/>
     <Tabs/>
     <ResultGrid/>
    </div>
  )
}

export default App
