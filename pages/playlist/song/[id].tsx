import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { Audiio } from '../../../components/Audiio'
const index: NextPage = () => {

  const [song , setSong] = useState(null)



  const router = useRouter()
  useEffect(() => {
    const id = router.query.id
    var raw = JSON.stringify({
      id,
    })

    fetch('http://localhost/AmethystBackend/playlist/getAudio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
    })
      .then((response) => response.json())
      .then((result) => setSong(result) )
      .catch((error) => console.log('error', error))
  }, [router.query])

  return (
    <div className="fixed flex min-h-screen min-w-full items-center justify-center overflow-auto bg-black">
      {/* <Audio /> */}
      <Audiio song={song} />
    </div>
  )
}

export default index
