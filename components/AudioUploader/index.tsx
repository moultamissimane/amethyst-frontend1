import Lottie from 'lottie-web'
import React, { useRef, useState, useEffect } from 'react'
import { LottieJSON } from '../LottieJSON'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import audioWave from '../../public/audioWave.json'
import { storage } from '../../firebase/index'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getBlob,
} from '@firebase/storage'
import { on } from 'events'
import { LinearProgress } from '@mui/material'

export const AudioUploader = () => {
  const [imageAsFile, setImageAsFile] = useState(null)
  const [imageIsLoading, setImageIsLoading] = useState(false)
  const [audioAsFile, setAudioAsFile] = useState(null)
  const inputRef = useRef()
  const inputAudioRef = useRef()
  const [progress, setProgress] = useState(0)

  const handleFireBaseUpload = (type: String) => {
    setImageIsLoading(true)
    if (!audioAsFile) {
      return alert('Please select an audio')
    } else {
      // @ts-ignore
      console.log(storage)
      // @ts-ignore
      const storageRef = ref(storage, `/${type}/${audioAsFile?.name}`)
      const uploadTask = uploadBytesResumable(storageRef, audioAsFile)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setProgress(prog)
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url)
            setImageIsLoading(false)
          })
        }
      )
    }
  }

  const handleChange = async (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore
      const image = e?.target?.files[0]
      setImageAsFile((imageFile) => image)
    }
  }
  const handleChangeAudio = async (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore
      const audio = e?.target?.files[0]
      setAudioAsFile((audioFile) => audio)
    }
  }

  useEffect(() => {
    if (imageAsFile) {
      handleFireBaseUpload('images')
      setImageAsFile(null)
    }
  }, [imageAsFile])

  useEffect(() => {
    if (audioAsFile) {
      handleFireBaseUpload('audios')
      setAudioAsFile(null)
    }
  }, [audioAsFile])

  return (
    <div className="m-3 w-[98%] rounded-xl p-3 shadow-md shadow-violet-600">
      <div className="w-full items-center ">

      <h2 className='text-xl ml-5 mb-2 font-bold text-violet-700 '>Insert Audio Name</h2>
        <div className="my-10 ml-5">
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField id="" label="Name of audio" color="secondary" />
          </Box>
        </div>
        <h2 className='text-xl ml-5 mb-2 font-bold text-violet-700 '>Insert Audio</h2>
        <label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-dashed border-gray-100 bg-gray-700 hover:bg-slate-800">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="mb-3 h-10 w-10 text-gray-400">
              <CloudUploadIcon />
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              MP3, chihaja
            </p>
          </div>
          <input
            // @ts-ignore
            ref={inputRef}
            onChange={handleChange}
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div className="mt-2">
        {imageIsLoading && <h3>({progress})loading ...</h3>}
        <LinearProgress variant="determinate" value={progress} />
      </div>

      <div className="mt-10 w-full items-center justify-center">
      <h2 className='text-xl ml-5 mb-2 font-bold text-violet-700 '>Insert Image</h2>

        <label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-dashed border-gray-100 bg-gray-700 hover:bg-slate-800">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="mb-3 h-10 w-10 text-gray-400">
              <CloudUploadIcon />
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            // @ts-ignore
            ref={inputAudioRef}
            onChange={handleChangeAudio}
            type="file"
            className="hidden"
          />
        </label>
      </div>
      <div className="mt-2">
        {imageIsLoading && <h3>({progress})loading ...</h3>}
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </div>
  )
}
