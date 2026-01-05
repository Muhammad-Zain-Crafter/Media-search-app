import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gifs']
  const dispatch = useDispatch()

  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex gap-10 p-10 items-center justify-center">
      {tabs.map((element, idx) => (
        <button
          key={idx}
          onClick={() => {dispatch(setActiveTab(element))}}
          className={`${
            activeTab === element ? 'bg-blue-500' : 'bg-gray-400'
          } px-4 py-2 uppercase cursor-pointer active:scale-95`}
        >
          {element}
        </button>
      ))}
    </div>
  )
}

export default Tabs
