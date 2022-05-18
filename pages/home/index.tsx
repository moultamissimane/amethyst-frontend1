import React from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import Lottie from '../../components/lottie'

const home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen min-w-full items-center justify-center overflow-auto bg-black">
      <Header />
      <div className="container m-auto px-6 pt-32 md:px-12 lg:px-7 lg:pt-[4.8rem]">
        <div className="flex flex-wrap items-center justify-between px-2 md:px-0">
          <div></div>
          <div className="-mt-5 lg:w-6/12 lg:py-24 xl:py-32 ">
            <Lottie />
          </div>
          <div className="w-full lg:-mb-56 lg:w-6/12">
            <p className="text-center text-xl font-bold text-white  lg:w-10/12">
              <br /> Meditation is the right solution for your problems.
              Meditation can help you in all aspects of your life. It helps to
              increase your creativity, improve relationships, reduce stress and
              anxiety and much more.
            </p>
            <div className="mr-24  flex items-center justify-center  space-y-4">
              <button className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-purple-500">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex items-end justify-center space-y-4">
            <button className="animate-pulse" title="Scroll to Next Section">
              <div className="h-7 w-4 animate-bounce rounded-lg border-2 border-white">
                <div className="mx-auto mt-1 h-3 w-1 rounded-xl border-2 border-white"></div>
              </div>
              <span className="-ml-8 text-white">Scroll Down</span>
            </button>
          </div>
        </div>

        <section className="flex w-full justify-center mt-14 rounded-2xl  lg:pt-[70px] lg:pb-8">
          <div className="container w-full">
              <h2 className='flex justify-center mb-6 text-white text-4xl'>hi</h2>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src="/images/LandingPage.png"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href=""
                        className="
                        hover:text-primary
                        mb-4 
                        block
                        text-xl
                        font-semibold
                        text-white
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        "
                      >
                        50+ Best creative website themes & templates
                      </a>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-white">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="/sleep"
                      className="
                     inline-block
                     rounded-full
                     border border-[#E5E7EB]
                     py-2
                     px-7 text-base
                     font-medium
                     text-white transition hover:bg-blue-600
                     hover:text-white
                     "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-slate-900">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="/meditation"
                        className="
                        text-dark
                        hover:text-primary mb-4
                        block
                        text-xl
                        font-semibold
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        "
                      >
                        The ultimate UX and UI guide to card design
                      </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
                     text-body-color
                     hover:border-primary
                     hover:bg-primary
                     inline-block rounded-full
                     border
                     border-[#E5E7EB] py-2
                     px-7
                     text-base font-medium transition
                     hover:text-white
                     "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="
                        text-dark
                        hover:text-primary mb-4
                        block
                        text-xl
                        font-semibold
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        "
                      >
                        Creative Card Component designs graphic elements
                      </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <a
                      href="javascript:void(0)"
                      className="
                     text-body-color
                     hover:border-primary
                     hover:bg-primary
                     inline-block rounded-full
                     border
                     border-[#E5E7EB] py-2
                     px-7
                     text-base font-medium transition
                     hover:text-white
                     "
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default home
