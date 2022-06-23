import Lottie from 'lottie-web'
import React, { useRef, useState, useEffect } from 'react'
import { LottieJSON } from '../LottieJSON'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// import audioWave from '../../public/audioWave.json'
import { storage } from '../../firebase/index'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getBlob,
} from '@firebase/storage'
import { on } from 'events'
import { LinearProgress } from '@mui/material'
import axios from 'axios'
import Swal from 'sweetalert2'

export const AudioUploader = () => {
  const [imageAsFile, setImageAsFile] = useState(null)
  const [imageIsLoading, setImageIsLoading] = useState<Boolean>(false)
  const [audioAsFile, setAudioAsFile] = useState(null)
  const inputRef = useRef()
  const inputAudioRef = useRef()
  const [progress, setProgress] = useState<number>(0)
  const [progressAudio, setProgressAudio] = useState<number>(0)
  const [audioURL, setAudioURL] = useState<String>('')
  const [imageURL, setImageURL] = useState<String>('')
  const [title, setTitle] = useState<String>('')

  const handleFireBaseUpload = (type: String) => {
    setImageIsLoading(true)
    if (audioAsFile || imageAsFile) {
      // @ts-ignore
      console.log(storage)
      // @ts-ignore
      let uploadTask
      // @ts-ignore
      const storageRef = ref(storage, `/${type}/${audioAsFile?.name}`)
      if (type === 'images') {
        // @ts-ignore
        uploadTask = uploadBytesResumable(storageRef, imageAsFile)
      }
      if (type === 'audios') {
        // @ts-ignore

        // create ref to storage bucket and create a file from the audio data then we create a new upload task then we return the uploadTask
        uploadTask = uploadBytesResumable(storageRef, audioAsFile)
      }
      // @ts-ignore

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round(

            // snapshot.bytesTransferred is the number of bytes transferred 

            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          if (type === 'images') {
            setProgress(prog)
          } else if (type === 'audios') {
            setProgressAudio(prog)
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          // @ts-ignore

          // we log the url to the console after we get the downloaded url from the snapshot

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url)
            if (type === 'images') {
              setImageURL(url)
            }
            if (type === 'audios') {
              setAudioURL(url)
            }
            setImageIsLoading(false)
          })
        }
      )
    } else {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select an audio',
      })
    }
  }

  const handleChange = async (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore
      const image = e?.target?.files[0]

      // set the imageFile to the image file that has been uploaded 

      setImageAsFile((imageFile) => image)
    }
  }
  const handleChangeAudio = async (e: any) => {
    // @ts-ignore
    if (e?.target?.files[0]) {
      // @ts-ignore

      // to access the audio file 

      const audio = e?.target?.files[0]  

      // set the audioFile to the audio file that has been uploaded 

      setAudioAsFile((audioFile) => audio)
    }
  }
  
  useEffect(() => {
    if (imageAsFile) {

      // upload images to firebase storage in the images folder in storage

      handleFireBaseUpload('images')
      setImageAsFile(null)
    }
  }, [imageAsFile])

  useEffect(() => {
    if (audioAsFile) {

      // upload audio to firebase storage in the audios folder in storage
      handleFireBaseUpload('audios')
      setAudioAsFile(null)
    }
  }, [audioAsFile])

  const [isLoading, setIsLoading] = useState(false)
  const [audios, setAudios] = useState()

  const handleUploadAudioToBackend = async () => {
    setIsLoading(true)
    let token = await localStorage.getItem('token')
    console.log(token)
    var myHeaders = new Headers()

    var raw = JSON.stringify({
      title: title,
      image: audioURL,
      src: imageURL,
    })
    console.log(raw)

    fetch('http://localhost/AmethystBackend/playlist/addAudio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          `Bearer ${localStorage.getItem('token')}`,
      },
      body: raw,
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  return (
    <div className="m-3 w-[98%] rounded-xl p-3 shadow-md shadow-violet-600">
      <div className="w-full items-center ">
        <div className="flex justify-between">
          <h2 className="ml-5 mb-2 text-xl font-bold text-violet-700 ">
            Insert Audio Name
          </h2>

          <button
            type="button"
            onClick={handleUploadAudioToBackend}
            className="mx-6 rounded-md border-2 border-black px-8 py-1 text-lg font-medium hover:border-slate-100 hover:bg-purple-700 hover:text-white"
          >
            Send
          </button>
        </div>
        <div className="my-10 ml-5">
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id=""
              label="Name of audio"
              color="secondary"
            />
          </Box>
        </div>
        <h2 className="ml-5 mb-2 text-xl font-bold text-violet-700 ">
          Insert Audio 
        </h2>
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
              MP3
            </p>
          </div>
          <input
            // @ts-ignore
            ref={inputAudioRef}
            onChange={handleChange}
            type="file"
            accept="audio/*"
            className="hidden"
          />
        </label>
      </div>
      <div className="mt-2">
        {imageIsLoading && <h3>({progress})loading ...</h3>}
        <LinearProgress variant="determinate" value={progressAudio} />
      </div>

      <div className="mt-10 w-full items-center justify-center">
        <h2 className="ml-5 mb-2 text-xl font-bold text-violet-700 ">
          Insert Image 
        </h2>

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
            ref={inputRef}
            onChange={handleChangeAudio}
            type="file"
            accept="image/*"
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
