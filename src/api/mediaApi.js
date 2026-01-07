import axios from 'axios';

const unsplashApi = import.meta.env.VITE_UNSPLASH_KEY;
const pexelsApi = import.meta.env.VITE_PEXELS_KEY;
const tenorApi = import.meta.env.VITE_TENOR_KEY;

// Fetch photos from Unsplash API
export async function fetchPhotos(query, page=1, perPage=20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query, page, per_page: perPage},
        headers: {
            Authorization: `Client-ID ${unsplashApi}`
        }
    })
    return res.data
}

// Fetch videos from Pexels API
export async function fetchVideos(query, perPage=16) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: {query, per_page: perPage},
        headers: {
            Authorization:pexelsApi
        }
    })
    return res.data
}

// Fetch GIFs from Tenor API
export async function fetchGIFs(query, Limit=15) {
    const res = await axios.get('https://tenor.googleapis.com/v2/search', {
        params: {q:query, key:tenorApi, Limit}
    })
    return res
}
