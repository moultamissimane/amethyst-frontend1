import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import Audio from '../../components/Audio'
import Header from '../../components/Header'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import IconButton from '@mui/material/IconButton'

const index = () => {
  const [audios, setAudios] = useState()

  useEffect(() => {
    fetch('http://localhost/AmethystBackend/playlist/getAudios')
      .then((response) => response.json())
      .then((result) => setAudios(result))
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <>
      <Header />
      <div className="flex min-h-screen justify-between bg-black  p-28 text-gray-300">
        <div className="w-1/4 rounded-2xl border-4 p-6 duration-500 ease-in-out hover:shadow-md hover:shadow-slate-50">
          <img
            className="my-3 items-center rounded-2xl border-2 border-white "
            src="../../../images/Group4.png"
            alt="Finding inner peace"
          />
          <IconButton className='hover:bg-white ml-28 -mt-14 bg-purple-300'>
            <PlayArrowRounded className='text-white w-7 h-7 hover:text-slate-600'/>
          </IconButton>
          <div className="flex flex-col justify-center">
            <h4 className="mt-0 mb-2 text-center text-xs uppercase text-gray-300">
              Playlist
            </h4>
            <h1 className="mt-0 mb-2 text-center text-3xl font-bold text-white">
              Finding Inner Peace
            </h1>

            <p className="text-md mt-3 text-center text-gray-200">
              Created by <a>Imane</a>
            </p>
            <p className="mb-2 text-sm text-slate-400 ">
              Whether it be binauralbeats, the crackle of a campfire or gentle
              piano, these music tracks invite you to unwind after a long day
              and melt into deep sleep or relaxation. nightynight
            </p>

            {/* <div className="mt-6">
              <div className="flex">
                <button className="block items-center rounded-full bg-purple-700 py-2 px-8 text-white">
                  Play
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-10">
          <div className="mr-20">
            {(audios || []).map(
              (
                audio: {
                  title: string
                  id: number
                  src: string
                  image: string
                },
                idx
              ) => {
                return (
                  <Link href={`playlist/song/${audio?.id}`}>
                    <div className="flex justify-between gap-96 rounded-lg border-b border-gray-800 bg-white text-lg text-black hover:text-purple-700">
                      {/* <div className="w-8 flex-shrink-0 p-3">▶️</div> */}
                      {/* <div className=""><PlayArrowRounded/></div> */}
                      <div className="flex">
                        <PlayArrowRounded />
                        <img className="h-12 w-12" src={audio?.image} alt="" />
                        <div className="w-full p-3">{audio?.title}</div>
                      </div>
                      {/* <div className="w-full p-3">Eminem</div>
                  <div className="w-full p-3">Spotify</div> */}
                      <div className="w-12 flex-shrink-0 p-3 text-right">
                        5:35
                      </div>
                    </div>
                  </Link>
                )
              }
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default index
