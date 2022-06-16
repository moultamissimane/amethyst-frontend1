import React, { useEffect, useState } from 'react'
// import Audio from '../../components/Audio'
import Header from '../../components/Header'

const index = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen justify-between bg-black  p-28 text-gray-300">
        <div className="w-1/4 rounded-lg border-4 p-3 duration-500 ease-in-out hover:shadow-md hover:shadow-slate-50">
          <img
            className="my-4 items-center rounded-md border-8 border-white "
            src="../../../images/CatPlaylist.jpg"
            alt="jyfj"
          />
          <div className="flex flex-col justify-center">
            <h4 className="mt-0 mb-2 text-xs uppercase text-gray-300">
              Playlist
            </h4>
            <h1 className="mt-0 mb-2 text-4xl text-white">Name of Playlist</h1>

            <p className="mb-2 text-sm text-gray-600">Description</p>
            <p className="text-sm text-gray-600">
              Created by <a>Spotify</a> - 50 songs, 3 hr 2 min
            </p>

            <div className="mt-6">
              <div className="flex">
                <button className="block items-center rounded-full bg-purple-700 py-2 px-8 text-green-100">
                  Play
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="mr-20">
            <div className="flex gap-10 border-b border-gray-800 hover:bg-gray-800">
              <div className="w-8 flex-shrink-0 p-3">▶️</div>
              <div className="w-8 flex-shrink-0 p-3">❤️</div>
              <div className="w-full p-3">My Song Here</div>
              <div className="w-full p-3">Eminem</div>
              <div className="w-full p-3">Spotify</div>
              <div className="w-12 flex-shrink-0 p-3 text-right">5:35</div>
            </div>

            <div className="flex gap-10 border-b border-gray-800 hover:bg-gray-800">
              <div className="w-8 flex-shrink-0 p-3">▶️</div>
              <div className="w-8 flex-shrink-0 p-3">❤️</div>
              <div className="w-full p-3">My Song Here</div>
              <div className="w-full p-3">Eminem</div>
              <div className="w-full p-3">Spotify</div>
              <div className="w-12 flex-shrink-0 p-3 text-right">5:35</div>
            </div>

            <div className="flex gap-10 border-b border-gray-800 hover:bg-gray-800">
              <div className="w-8 flex-shrink-0 p-3">▶️</div>
              <div className="w-8 flex-shrink-0 p-3">❤️</div>
              <div className="w-full p-3">My Song Here</div>
              <div className="w-full p-3">Eminem</div>
              <div className="w-full p-3">Spotify</div>
              <div className="w-12 flex-shrink-0 p-3 text-right">5:35</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
