import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import {
  clearCollection,
  removeAllToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);

  const handleclearCollection = () => {
    dispatch(clearCollection());
    dispatch(removeAllToast());
  };
  return (
    <div className="overflow-auto">
      <div className="flex justify-between p-4">
        <h1 className="md:text-2xl font-semibold">
          Your Collection ({collection.length} items)
        </h1>
        <button
          onClick={handleclearCollection}
          className="bg-red-600 md:text-lg px-1 md:px-2 py-1 font-medium text-white cursor-pointer rounded active:scale-95"
        >
          Clear Collection
        </button>
      </div>

      <div
        className="grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-5
            p-4
            m-2"
      >
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
