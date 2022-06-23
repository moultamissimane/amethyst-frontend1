import React, { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import LoginHeader from '../../components/LoginHeader'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { DivClick } from '../../components/DivClick'

const LandingPage: NextPage = () => {
  const router = useRouter()

  const handleClick = (e: Event, path: string) => {
    e.preventDefault()
    router.push(path)
  }
  

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
        <p className="text-center text-xl font-bold text-white">
          Beautiful, natural sleep every night.
          <br /> We're committed to providing you with a healthy,
          <br /> more restorative and more refreshing sleep environment,
          <br /> so you can get the best night's rest, every night.
        </p>
        <div className="flex w-full justify-center rounded-2xl ">
          <div className="flex w-full max-w-[50%] cursor-pointer flex-wrap justify-between p-4">
            {cards?.map((card, i) => (
              <DivClick
              card={card}
              key={i} />
            ))}
          </div>
        </div>
        <Link href="./FCostumizing">
          <button
            // @ts-ignore
            onClick={(e) => handleClick(e, './landingPages/FCostumizing')}
            className="mt-6 flex w-36 justify-center rounded-lg bg-white from-purple-800 to-violet-700 p-2 text-xl font-bold text-black hover:bg-gradient-to-r hover:text-white"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  )
}
export default LandingPage
