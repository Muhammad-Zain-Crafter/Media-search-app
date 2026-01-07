import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi.js";
import {
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard.jsx";

const defaultQuery = "trending"; // fallback keyword

const ResultGrid = () => {
  const { query, activeTab, results, error, loading } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());

        const searchTerm = query || defaultQuery;
        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(searchTerm);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        } 
        else if (activeTab === "videos") {
          const response = await fetchVideos(searchTerm);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url,
          }));
        } 
        else if (activeTab === "gifs") {
          const response = await fetchGIFs(searchTerm);
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError("Something went wrong"));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 p-2 overflow-auto h-auto">
      {results.map((item) => (
        <ResultCard
          key={`${item.type}-${item.id}`}
          item={item}
        />
      ))}
    </div>
  );
};

export default ResultGrid;
