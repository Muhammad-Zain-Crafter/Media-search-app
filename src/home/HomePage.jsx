import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

const HomePage = () => {
  return (
    <div>
    <h1 className='p-6 text-2xl bg-blue-800 font-bold text-center'>
      Media Search
    </h1>
     <SearchBar/>
     <Tabs/>
     <ResultGrid/>
    </div>
  )
}

export default HomePage
