import React, { useRef } from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import Lottie from '../../components/lottie'
// import { Carousel } from '../../components/Carousel'
import Footer from '../../components/Footer'

const home: NextPage = () => {
  const testimonialsRef = useRef<any>(null)

  const scrollMe = () => {
    const element = testimonialsRef.current

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <div className="relative flex min-h-screen min-w-full items-center justify-center overflow-auto bg-black">
      <Header />
      <div className="m-auto">
        <div className="mt-24 flex flex-wrap items-center justify-between px-2 md:px-0">
          <div className="-mt-10 lg:w-6/12 lg:py-24 xl:py-32 ">
            <Lottie />
          </div>
          <div className="w-full lg:w-6/12">
            <p className="text-center indent-8 text-xl font-bold text-white  lg:w-10/12">
              <br /> Meditation is the right solution for your problems.
              Meditation can help you in all aspects of your life. It helps to
              increase your creativity, improve relationships, reduce stress and
              anxiety and much more.
            </p>
            <div className="mr-24  flex items-center justify-center space-y-4">
              <button className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-purple-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={scrollMe}
          className="mb-10 mt-10 flex cursor-pointer items-center justify-center space-y-4"
        >
          <div className="animate-pulse" title="Scroll to Next Section">
            <div className="h-7 w-4 animate-bounce rounded-lg border-2 border-white">
              <div className="mx-auto mt-1 h-3 w-1 rounded-xl border-2 border-white"></div>
            </div>
            <span className="-ml-8 font-bold text-white ">Scroll Down</span>
          </div>
        </div>

        <div className="mt-20 flex justify-between gap-3 bg-white p-4 lg:grid-cols-2 ">
          <div className="mx-7">
            <h1 className="mt-10 text-4xl font-bold text-black">
              Discover the best sounds to help you meditate
            </h1>
            <p className="mt-10 text-lg text-slate-900">
              Discover the best sounds to help you meditate and relax with
              <br /> this timer, which automatically plays sounds at a pace
              matched <br />
              to your breathing pattern. Find your zen in seconds with these
              custom <br /> meditation timers, which are perfect for setting the
              tone of any session.
            </p>
          </div>
          <div className="w-3/4 flex-row-reverse">
            <video className="my-5 rounded-2xl" autoPlay loop muted>
              <source src="/images/Caaandle.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="flex justify-between gap-3  bg-black p-4 lg:grid-cols-2 ">
          <div className="w-3/4">
            <video className="my-5 rounded-2xl" autoPlay loop muted>
              <source src="/images/beach.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mx-7">
            <h1 className="mt-10 text-4xl font-bold text-white">
              Discover the best sounds to help you sleep
            </h1>
            <p className="mt-10 text-lg text-slate-100">
              Discover the best sounds for you to help you fall <br /> asleep
              easier, faster, and more soundly. Our sleep timer will
              automatically shut down the sound after a specified period of time
              has elapsed.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute mb-20 flex rounded-xl object-cover"></div>

            {/* <image className="w-full" src="https://images.unsplash.com/photo-1489516408517-0c0a15662682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" /> */}
          </div>
        </div>
        <div className="bg-white p-10">
          <div className="mx-auto  max-w-xl text-center">
            <h1
              ref={testimonialsRef}
              className=" text-4xl font-bold text-black "
            >
              Testimonials
            </h1>
          </div>
          <div className="mb-10 text-center">
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#703698]"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#703698]"></span>
            <span className="ml-1 inline-block h-1 w-40 rounded-full bg-[#703698]"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#703698]"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#703698]"></span>
          </div>
          <div className="-mx-3 mt-10 items-start md:flex">
            <div className="px-3 md:w-1/3">
              <div className="mx-auto mb-6 w-full rounded-lg border-4 border-[#703698] bg-white p-5 font-light text-gray-800 shadow-md shadow-[#703698]">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="text-sm font-bold uppercase text-gray-600">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium, vero sint
                    recusandae cum tempora nemo commodi soluta deleniti.
                    <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="mx-auto mb-6 w-full rounded-lg border-4 border-[#703698] bg-white p-5 font-light text-gray-800 shadow-md shadow-[#703698]">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="text-sm font-bold uppercase text-gray-600">
                      Stevie Tifft.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                    Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                    Dolore quod necessitatibus, labore sapiente, est,
                    dignissimos ullam error ipsam sint quam tempora vel.
                    <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="mx-auto mb-6 w-full rounded-lg border-4 border-[#703698] bg-white p-5 font-light text-gray-800 shadow-md shadow-[#703698]">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="text-sm font-bold uppercase text-gray-600">
                      Tommie Ewart.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae, obcaecati ullam excepturi dicta error deleniti sequi.
                    <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="mx-auto mb-6 w-full rounded-lg border-4 border-[#703698] bg-white p-5 font-light text-gray-800 shadow-md shadow-[#703698]">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="text-sm font-bold uppercase text-gray-600">
                      Charlie Howse.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto inventore voluptatum nostrum atque, corrupti,
                    vitae esse id accusamus dignissimos neque reprehenderit
                    natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.
                    <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="mx-auto mb-6 w-full rounded-lg border-4 border-[#703698] bg-white p-5 font-light text-gray-800 shadow-md shadow-[#703698]">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="text-sm font-bold uppercase text-gray-600">
                      Nevada Herbertson.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                    ipsum, laboriosam nostrum facere exercitationem pariatur
                    deserunt tempora molestiae assumenda nesciunt alias eius?
                    Illo, autem!
                    <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="mx-auto mb-6 w-full rounded-lg border-4 border-[#703698] bg-white p-5 font-light text-gray-800 shadow-md shadow-[#703698]">
                <div className="mb-4 flex w-full items-center">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="text-sm font-bold uppercase text-gray-600">
                      Kris Stanton.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="mr-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem iusto, explicabo, cupiditate quas totam!
                    <span className="ml-1 text-lg font-bold italic leading-none text-gray-400">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default home
