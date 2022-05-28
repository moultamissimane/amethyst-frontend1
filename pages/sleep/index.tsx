import React from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import LottieMoon from '../../components/LottieMoon'
import Footer from '../../components/Footer'
import Image from 'next/image'

const index: NextPage = () => {
  return (
    <div className=" min-w-screen relative min-h-screen overflow-auto bg-black">
      <Header />
      <div className=" mt-24">
        <div className="flex flex-wrap  items-center justify-between px-2 md:px-0">
          <div className="mt-5 ml-10 duration-500 ease-in-out hover:rotate-6 hover:scale-125 lg:py-24">
            <LottieMoon />
          </div>
          <div className="mt-20 w-full lg:w-6/12">
            <p className="mt-5 text-center indent-8 text-xl font-bold text-white lg:w-10/12">
              You spend one-third of your life sleeping and by now you should be
              pretty good at it. Unfortunately, for many of us, sleep isn't
              restful. We toss and turn at night, wake up tired in the morning
              and miss out on the health benefits a good night's sleep can give
              us.With Amethyst, you'll learn how to create healthy sleep habits
              and improve your chances for a more restful night's sleep.
            </p>
            <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out hover:rotate-6 hover:scale-125">
              <button className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-purple-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-10 flex items-center justify-center space-y-4">
          <div className="animate-pulse" title="Scroll to Next Section">
            <div className="h-7 w-4 animate-bounce rounded-lg border-2 border-white">
              <div className="mx-auto mt-1 h-3 w-1 rounded-xl border-2 border-white"></div>
            </div>
            <span className="-ml-8  text-white duration-500 ease-in-out hover:rotate-6 hover:scale-125">
              Scroll Down
            </span>
          </div>
        </div>

        <div className="flex w-screen overflow-hidden bg-white">
          <div
            style={{
              backgroundImage: "url('/images/.png')",
            }}
            className="flex  w-screen flex-col items-center justify-center bg-cover bg-center"
          >
            <div className=" m-auto my-20 grid w-full rounded-lg bg-transparent p-10 text-center backdrop-blur-sm  md:grid-cols-2">
              <img
                className="m-auto rounded-lg"
                src="/images/amethyst.jpg"
                alt=""
              />
              <div className=" m-auto p-5  text-lg text-black md:ml-5 md:text-left">
                <div className="mb-3 text-3xl font-semibold">
                  Why Choose Amethyst ?
                </div>
                <div className="">
                  Amethyst is a free intuitive meditation app that helps you
                  find peace in your day to day life. Based on ancient wisdom
                  and modern science, amethyst teaches real time breathing
                  exercises and mindfulness exercises for you to use anytime,
                  anywhere. With our simple but effective teaching style,
                  meditation becomes effortless!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black my-10 text-center text-3xl font-semibold italic text-white">
          Improve your sleep with our lessons
          </div>
          <div className="mx-auto grid bg-black text-gray-800 md:grid-cols-3 md:px-12">
            <div className="m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded text-sm shadow-lg sm:mx-auto md:m-5">
              <div className="">
                <img src="/images/forest.jpg" alt="forest" />
              </div>
              <div className="text p-5 pt-2 text-center">
                <div className=" my-2 text-xl font-semibold text-white">
                  Pepperoni
                </div>
                <div className="text-white">
                  A classic. Just throw a few (or a ton of) slices of pepperoni
                  on top of the cheese, and you'll soon have a greasy, slightly
                  spicy and delicious pizza that you simply can't go wrong with.
                </div>
              </div>
            </div>

            <div className="m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded text-sm shadow-lg sm:mx-auto md:m-5">
              <div className="">
                <img src="/images/rocks.jpg" alt="forest" />
              </div>
              <div className="text p-5 pt-2 text-center">
                <div className="title my-2 text-xl font-semibold text-white">
                  Pepperoni
                </div>
                <div className="text-white">
                  A classic. Just throw a few (or a ton of) slices of pepperoni
                  on top of the cheese, and you'll soon have a greasy, slightly
                  spicy and delicious pizza that you simply can't go wrong with.
                </div>
              </div>
            </div>

            <div className=" m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded text-sm shadow-lg sm:mx-auto md:m-5">
              <div className="img">
                <img src="/images/montains.jpg" alt="forest" />
              </div>
              <div className="text p-5 pt-2 text-center">
                <div className="title my-2 text-xl font-semibold text-white">
                  Pepperoni
                </div>
                <div className="text-white">
                  A classic. Just throw a few (or a ton of) slices of pepperoni
                  on top of the cheese, and you'll soon have a greasy, slightly
                  spicy and delicious pizza that you simply can't go wrong with.
                </div>
              </div>
            </div>
          </div>

        <div className="section scree grid w-full border bg-gray-200 py-28 text-gray-800 md:grid-cols-2">
          <div className="subsec my-auto p-8">
            <div className="title mb-5 text-3xl font-semibold">
              What is paleo pizza crust made out of?
            </div>
            <div className=" text-lg">
              We've seen it all kinds of ways, with different types of flours,
              but we settled on almond flour for its nutty flavor. We also mix
              in spices—Italian seasoning and garlic powder—to give it more
              flavor. We skip yeast because it can be a pain and instead
              incorporate eggs and olive oil. The eggs help make the crust
              fluffy.
            </div>
          </div>
          <div className="subsec max-h-96 flex-none overflow-hidden">
          <div>
          <img src="/images/montains.jpg" alt="forest" />

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
