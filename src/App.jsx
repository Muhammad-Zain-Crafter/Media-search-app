import { useState } from 'react'
import './App.css'
import { fetchPhotos, fetchVideos, fetchGifs } from './api/mediaApi.js'

function App() {

  return (
    <div className='h-screen w-full bg-gray-950 text-white'>
      <button onClick={
        async () => {
          const data = await fetchPhotos('cats')
          console.log(data.results)
          }}>
        Fetch Photos
      </button>
      <button onClick={
        async () => {
          const data = await fetchVideos('cats')
          console.log(data.videos)
          }}>
        Fetch videos
      </button>
      <button onClick={
        async () => {
          const data = await fetchGifs('cats')
          console.log(data.data.results)
          }}>
        Fetch GIF
      </button>
    </div>
  )
}

export default App
