import React from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import Meditation from '../../components/Meditation'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const index: NextPage = () => {
  return (
    <div className=" min-w-screen relative min-h-screen overflow-auto bg-black">
      <Header />
      <div className=" mt-24">
        <div className="flex flex-wrap  items-center justify-between px-2 md:px-0">
          <div className="mt-5 ml-10  lg:py-24">
            <Meditation />
          </div>
          <div className="mt-20 w-full lg:w-6/12">
            <p className="mt-5 text-center indent-8 text-xl font-bold text-white lg:w-10/12">
              Are you looking to improve your life and make it a more enjoyable
              experience? Meditation is an essential practice to learn, even in
              today's fast paced world. Learn the benefits of meditation today
              and change the way you think and live!
            </p>
            <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out hover:rotate-6 hover:scale-125">
              <a
                href="/#"
                className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-emerald-500"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-10 flex cursor-pointer items-center justify-center space-y-4">
          <div className="animate-pulse" title="Scroll to Next Section">
            <div className="h-7 w-4 animate-bounce rounded-lg border-2 border-white">
              <div className="mx-auto mt-1 h-3 w-1 rounded-xl border-2 border-white"></div>
            </div>
            <span className="-ml-8 font-bold text-white ">Scroll Down</span>
          </div>
        </div>

        <div className="flex w-screen  overflow-hidden bg-white">
          <div
            style={{
              backgroundImage: "url('/images/emeraldo.jpg')",
            }}
            className="flex  w-screen flex-col items-center justify-center  bg-cover bg-center "
          >
            <div className=" m-auto my-20 grid w-full rounded-lg p-10 text-center backdrop-blur-lg md:grid-cols-2">
              <div className=" m-auto p-5 text-lg text-white  md:ml-5 md:text-left">
                <div className="mb-3 text-3xl  font-semibold">
                  Meditation With Amethyst is Fun 🔮
                </div>
                <div className="">
                  Amethyst is a purple variety of quartz crystal. It has long
                  been considered an extremely powerful metaphysical stone and
                  is used for protection, healing, inner strength and peaceful
                  lucid dreaming. Meditation with Amethyst can help you feel
                  calm, relaxed, focused and alert. Meditation with Amethyst can
                  be used by anyone to achieve these benefits in their daily
                  lives or as part of a meditation practice.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 bg-black text-center text-4xl font-semibold text-white">
          Start Your Courses Online✨
        </div>
        <div className=" grid bg-black text-gray-800 md:grid-cols-3 md:px-12">
          <div className="m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded text-sm shadow-lg sm:mx-auto md:m-5">
            <div className="duration-500 ease-in-out hover:scale-125 hover:rounded">
              <video
                loop
                autoPlay
                className="m-auto rounded-lg backdrop-blur-lg"
                src="/images/sunset.mp4"
              />
            </div>
            <div className=" p-5 pt-2 text-center">
              <div className=" my-2 text-xl font-semibold text-white">
                Finding Inner Peace
              </div>
              <div className="text-white">
                Amethyst is the perfect gift for someone who needs to find inner
                peace.
              </div>
              <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out  hover:scale-125">
                <Link href="../meditation/PrePlaylist" passHref>
                  <button className="text-md mt-10 ml-20 items-center rounded-lg bg-white px-10 py-3 font-bold text-black shadow-lg shadow-blue-700">
                    Play Playlist
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded text-sm shadow-lg sm:mx-auto md:m-5">
            <div className="duration-500 ease-in-out hover:scale-125">
              <video
                loop
                autoPlay
                className="m-auto rounded-lg backdrop-blur-lg"
                src="/images/amethyst.mp4"
              />
            </div>
            <div className="text p-5 pt-2 text-center">
              <div className="title my-2 text-xl font-semibold text-white">
                Stress Less
              </div>
              <div className="text-white">
                Calm feelings of stress and worry quickly, with Amethyst by your
                side.
              </div>
              <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out  hover:scale-125">
                <Link href="../meditation/PrePlaylist" passHref>
                  <button className="text-md mt-10 ml-20 items-center rounded-lg bg-white px-10 py-3 font-bold text-black shadow-lg shadow-blue-700">
                    Play Playlist
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className=" m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded text-sm shadow-lg sm:mx-auto md:m-5">
            <div className="duration-500 ease-in-out hover:scale-125">
              <video
                loop
                autoPlay
                className="m-auto rounded-lg backdrop-blur-lg"
                src="/images/beach.mp4"
              />
            </div>
            <div className="text p-5 pt-2 text-center">
              <div className="title my-2 text-xl font-semibold text-white">
                Calm Nights
              </div>
              <div className="text-white ">
                A beautiful amethyst will help you relax and enjoy peaceful
                nights.
              </div>
              <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out hover:scale-125">
                <Link href="../meditation/PrePlaylist" passHref>
                  <button className="text-md mt-10 ml-20 items-center rounded-lg bg-white px-10 py-3 font-bold text-black shadow-lg shadow-blue-700">
                    Play Playlist
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full bg-black py-20 text-emerald-500 md:grid-cols-2">
          <div className=" my-auto p-8">
            <div className="title mb-5 text-3xl font-semibold">
              Want to know about meditation for kids?
            </div>
            <div className=" text-lg text-white">
              Teaching mindfulness to kids can help shape three critical skills
              developed in early childhood: paying attention and remembering
              information, shifting back and forth between tasks, and behaving
              appropriately with others. These abilities are known as executive
              functions and they are essential for more advanced tasks like
              planning, reasoning, problem-solving, and positive social
              relationships.
            </div>
            <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out hover:rotate-6 hover:scale-125">
              <Link href="/meditationForKids" passHref>
                <button className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-emerald-600">
                  Meditation for kids
                </button>
              </Link>
            </div>
          </div>
          <div className=" mx-5 max-h-96 flex-none overflow-hidden rounded-lg">
            <div>
              <img src="/images/sleep.jpg" alt="forest" />
            </div>
          </div>
        </div>
        <Footer />
        {/* </div> */}
      </div>
    </div>
  )
}

export default index
