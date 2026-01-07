import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCollection = (item) => {
        dispatch(removeFromCollection(item))
        dispatch(removeToast())
    }

  return (
    <div className="w-[22vw] h-80 bg-white rounded relative overflow-hidden">

       <a className="h-full w-full"
       href={item.url} target="_blank">
        {item.type === "photo" && (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover object-center"
        />
      )}

      {item.type === "video" && (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      )}

      {item.type === "gif" && (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      )}
       </a>

        <div id="bottom"
        className="absolute bottom-0 w-full flex justify-between items-center px-2">
            <h3 
            className="text-white text-lg font-semibold h-14 overflow-hidden">
               {item.title}
            </h3>   
            <button onClick={() => handleRemoveFromCollection(item)}
            className="bg-indigo-600 text-white px-3 py-2 m-4 font-medium rounded hover:bg-indigo-500 cursor-pointer active:scale-90">
                Remove
            </button>
        </div>
    </div>
  )
}

export default CollectionCard
