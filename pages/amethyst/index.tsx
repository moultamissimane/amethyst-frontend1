import React, { useRef } from 'react'
import { NextPage } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

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
      image: '/images/ClearQuartz.png',
      title: 'Clear Quartz',
      link: 'ReadAboutClearQuartz',
    },
    {
      image: '/images/amethyst400.png',
      title: 'Amethyst',
      link: 'ReadAboutAmethyst',
    },
    {
      image: '/images/rose-quartz-png-5-Transparent-Images.png',
      title: 'Rose Quartz',
      link: 'ReadAboutRose',
    },
    {
      image: '/images/slinite-quartz.png',
      title: 'Selenite',
      link: 'ReadAboutSelenite',
    },
    {
      image: '/images/tourmaline.png',
      title: 'Black Tourmaline',
      link: 'ReadAboutBlackTourmaline',
    },
    {
      image: '/images/BlackQuartz.png',
      title: 'Smokey Quartz',
      link: 'ReadAboutSmokeyQuartz',
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

        <div className="my-10 bg-black text-center text-3xl font-semibold text-white">
          6 Gemstones for a deeply meditation session
          <div className="grid bg-black text-gray-800 md:grid-cols-3 md:px-12">
            {cards?.map((e, i) => (
              <div
                key={i}
                className="m-5 mx-auto flex max-w-sm flex-col items-center justify-center overflow-hidden rounded p-3 text-sm shadow-lg sm:mx-auto md:m-5"
              >
                <Link href={`/articles/${e?.link}` || '#'}>
                  <div className="w-56 cursor-pointer">
                    <img src={e.image} alt="" />
                  </div>
                </Link>
                <div className=" p-10 pt-2 text-center text-white">
                  <div className=" my-2 text-xl font-semibold ">{e.title}</div>
                </div>
              </div>
            ))}
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
