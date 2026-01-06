import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi.js";
import {
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const { query, activeTab, results, error, loading} = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return // do nothing if query is empty
    const getData = async () => {
      try {
        dispatch(setLoading()); // true loading state

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          console.log(response.results)
          // normalize data
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }));
        } else if (activeTab === "videos") {
          const response = await fetchVideos(query);
          // normalize data
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            src: item.video_files?.[0]?.link,
            url: item.url
          }));
        } else if (activeTab === "gifs") {
          const response = await fetchGIFs(query);
          // normalize data
          data = response.data.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err || "Something went wrong"));
      }
    };
    if (query) {
      getData();
    }
  }, [query, activeTab]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  return (
  <div className="flex flex-wrap justify-center gap-5 p-2 overflow-auto h-auto">
    {results.map((item) => {
        return <div key={item.id}>
            <ResultCard item={item}/>
        </div>  
    })}
  </div>
  )
};

export default ResultGrid;
