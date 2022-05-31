import React, { useEffect, useRef } from 'react'
import { NextPage } from 'next'
import LoginHeader from '../../components/LoginHeader'

const LandingPage: NextPage = () => {
  const cards = [
    {
      text: 'Reduce stress and anxiety',
      image: '/images/stress.png',
    },
    {
      text: 'Deal with life situation',
      image: '/images/lifeSituation.png',
    },
    {
      text: 'Improve my focus',
      image: '/images/focus.png',
    },
    {
      text: 'Achieve success',
      image: '/images/success.png',
    },
    {
      text: 'Improve sleep quality',
      image: '/images/sleep.png',
    },
    {
      text: 'Feel happier',
      image: '/images/happy.png',
    },
  ]

  return (
    <div className="fixed">
      <LoginHeader />
      <video
        className="flex h-screen w-screen items-center justify-center object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/images/LandingPVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 z-50 mt-40 flex h-full w-full flex-col items-center">
        <p className=" text-center text-xl font-bold text-white">
          Beautiful, natural sleep every night.
          <br /> We're committed to providing you with a healthy,
          <br /> more restorative and more refreshing sleep environment,
          <br /> so you can get the best night's rest, every night.
        </p>
        <div className="flex w-full justify-center rounded-2xl ">
          <div className="flex w-full max-w-[50%] flex-wrap justify-between p-4">
            {cards?.map((e, i) => (
              <div key={i} className="my-3 flex gap-1 items-center w-[45%] bg-white rounded-xl p-1">
                <div
                className='bg-center bg-cover w-16 h-14'
                  style={{
                    backgroundImage:`url('${e.image}')`
                  }}
                />
                <span className='text-lg font-bold'>{e.text}</span>
              </div>
            ))}
          </div>
        </div>
        <button className='bg-white text-black hover:bg-gradient-to-r from-purple-500 to-violet-400 hover:text-white font-bold text-xl rounded-lg w-36 flex justify-center mt-6 p-2'>Continue</button>
      </div>
    </div>
  )
}
export default LandingPage;
