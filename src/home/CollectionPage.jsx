
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection, removeAllToast } from '../redux/features/collectionSlice';

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collection.items)

  const handleclearCollection = () => {
    dispatch(clearCollection())
    dispatch(removeAllToast())
  }
  return (
   <div className='overflow-auto'>
    <div className='flex justify-between p-4'>
     <h2 className='text-2xl font-semibold'>
      Your Collection ({collection.length} items)
    </h2>
    <button onClick={handleclearCollection}
    className='bg-red-600 text-lg px-2 py-1 font-medium text-white cursor-pointer rounded active:scale-95'>
      Clear Collection
    </button>
    </div>
   
     <div className="flex flex-wrap justify-start gap-5 p-2 py-8 overflow-auto h-auto">
      {collection.map((item, idx) => {
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}
    
      
    </div>
   </div>
  )
}

export default CollectionPage
