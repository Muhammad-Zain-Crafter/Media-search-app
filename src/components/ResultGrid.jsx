import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi.js";
import {
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return // do nothing if query is empty
    const getData = async () => {
      try {
        dispatch(setLoading()); // true loading state

        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          // normalize data
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
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

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }
//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }
  return <div>
    {results.map((item, idx) => {
        return item.title
    })}
  </div>;
};

export default ResultGrid;
