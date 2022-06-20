import { NextPage } from 'next'
import React from 'react'
import { Audio } from '../../../components/Audio'
import {Audiio} from '../../../components/Audiio'
 const index: NextPage = () => {
  return (
    <div className='fixed flex min-h-screen min-w-full items-center justify-center overflow-auto bg-black'>
      {/* <Audio /> */}
      <Audiio />
    </div>
  )
}

export default index