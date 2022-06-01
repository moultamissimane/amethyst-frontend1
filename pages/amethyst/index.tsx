import React, { useRef } from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const index: NextPage = () => {
  const testimonialsRef = useRef<any>(null)

  const scrollMe = () => {
    const element = testimonialsRef.current

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  const cards = [
    {
      image: '/images/ClearQUARTZ.png',
      title: 'Reduce stress and anxiety',
    },
    {
      image: '/images/lifeSituation.png',
      title: 'Reduce stress and anxiety',
    },
    {
      image: '/images/focus.png',
      title: 'Reduce stress and anxiety',
    },
    {
      image: '/images/success.png',
      title: 'Reduce stress and anxiety',
    },
    {
      image: '/images/sleep.png',
      title: 'Reduce stress and anxiety',
    },
    {
      image: '/images/happy.png',
      title: 'Reduce stress and anxiety',
    },
  ]

  return (
    <div className="relative flex min-h-screen min-w-full items-center justify-center overflow-auto bg-black">
      <Header />
      <div className="m-auto">
        <video
          className="flex h-screen w-screen items-center justify-center object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/images/Gemstones.mp4" type="video/mp4" />
        </video>
        <div
          onClick={scrollMe}
          className="mb-10 -mt-20 flex cursor-pointer justify-center space-y-4"
        >
          <div className="animate-pulse" title="Scroll to Next Section">
            <div className="h-7 w-4 animate-bounce rounded-lg border-2 border-black">
              <div className="mx-auto mt-1 h-3 w-2 rounded-xl border-2 border-black"></div>
            </div>
            <span className="-ml-8 font-bold text-black">Scroll Down</span>
          </div>
        </div>
        <div className="mt-24 flex flex-wrap items-center justify-between px-2 md:px-0">
          <div className="w-full lg:w-6/12">
            {/* <div className="mr-24  flex items-center justify-center space-y-4">
              <button className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-purple-500">
                Get Started
              </button>
            </div> */}
          </div>
        </div>

        <div className="my-10 bg-black text-center text-3xl font-semibold text-white">
          Improve your sleep with our lessons
          <div className=" grid bg-black text-gray-800 md:grid-cols-3 md:px-12">
            {cards?.map((e, i) => (
              <div key={i} className="m-5 mx-auto flex  max-w-sm flex-col overflow-hidden rounded p-3 text-sm shadow-lg sm:mx-auto md:m-5">
                <div className="rounded-xl duration-500 ease-in-out hover:scale-125">
                 <img src="{`$(e.image)`}" alt="" />
                </div>
                <div className=" p-10 pt-2 text-center text-white">
                  <div className=" my-2 text-xl font-semibold ">{e.title}</div>
                </div>
              </div>
            ))}

            {/* <div className="m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded p-3 text-sm shadow-lg sm:mx-auto md:m-5">
              <div className="duration-500 ease-in-out hover:scale-125">
                <img
                  src="/images/1_WeiQDBan0S4ytur4ldeszQ.jpg"
                  alt="rocks"
                  className="rounded-xl"
                />
              </div>
              <div className="m-3 pt-2 text-center">
                <div className="text-xl font-semibold text-white">
                  Breathing exercises
                </div>
                <div className="text-white">
                  Lie down, or sit straight but comfortably. Relax and put one
                  hand on your chest and one on your upper stomach. Watch the
                  movement of your hands Take a DEEP breath and watch the
                  movement of your hand.
                </div>
                <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out  hover:scale-125">
                  <a
                    href=""
                    className="mt-6 ml-20 items-center rounded-lg bg-white px-14 py-3 text-sm font-bold text-black shadow-lg shadow-blue-700"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div className="m-5 mx-auto flex max-w-sm flex-col overflow-hidden rounded p-3 text-sm shadow-lg sm:mx-auto md:m-5">
              <div className="duration-500 ease-in-out hover:scale-125">
                <img
                  src="/images/sleep.jpg"
                  alt="forest"
                  className="rounded-xl"
                />
              </div>
              <div className="p-5 pt-2 text-center">
                <div className="my-2 text-xl font-semibold text-white">
                  Bed time stories
                </div>
                <div className="text-white ">
                  Once your child is comfortable with the idea of meditation,
                  you can offer them tools to refine their own practice. Here
                  are three guided practices developed for kids. Feel free to
                  join your child in these meditations if it helps encourage
                  focus.
                </div>
                <div className="mr-24 flex items-center justify-center space-y-4 duration-500 ease-in-out hover:scale-125">
                  <a
                    href=""
                    className="mt-10 ml-20 items-center rounded-lg  bg-white px-10 py-3 text-sm font-bold text-black shadow-lg shadow-blue-700"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div> */}
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

export default index
