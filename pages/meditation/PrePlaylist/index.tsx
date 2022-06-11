import React, { useRef } from 'react'
import { NextPage } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
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
      image: '/images/Group2.png',
      title: 'Calm Nights',
      link:'ReadAboutClearQuartz'
    },
    {
      image: '/images/Group3.png',
      title: 'Finding Inner Peace',
      link:'ReadAboutAmethyst'

    },
    {
      image: '/images/Group4.png',
      title: 'Finding Inner Peace',
      link:'ReadAboutAmethyst'

    },
    {
      image: '/images/Group5.png',
      title: 'Pure Chill',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group16.png',
      title: 'Pure Chill',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group7.png',
      title: 'Songs Of Hope',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group8.png',
      title: 'Sounds to calm',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group9.png',
      title: 'Find Your Focus',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group10.png',
      title: 'Morning Mindset',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group11.png',
      title: 'Songs Of The Wild',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group12.png',
      title: 'Soothing Soundtrack',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group13.png',
      title: 'Finding Peace',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group14.png',
      title: 'Lullabies & Sweet Dreams',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group15.png',
      title: 'Meet Your Hero',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group6.png',
      title: 'Free From Fear',
      link:'ReadAboutBlackTourmaline'

    },
    {
      image: '/images/Group17.png',
      title: 'Raising Motivation',
      link:'ReadAboutSmokeyQuartz'

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
        {/* <div className="mt-24 flex flex-wrap items-center justify-between px-2 md:px-0">
          <div className="w-full lg:w-6/12"> */}
            {/* <div className="mr-24  flex items-center justify-center space-y-4">
              <button className="mt-10 rounded-lg bg-white px-2 py-3 font-bold text-black shadow-lg shadow-purple-500">
                Get Started
              </button>
            </div> */}  
          {/* </div>
        </div> */}

        <div className="m-10 pt-10 bg-black text-center text-3xl font-semibold text-white">
          Dive into thousands of playlists created by Amethyst
          <div className="grid bg-black text-gray-800 lg:grid-cols-4 md:grid-cols-2 md:px-12">
            {cards?.map((e, i) => (
              <div key={i} className=" mx-auto flex justify-center items-center max-w-sm flex-col overflow-hidden p-3 text-sm  sm:mx-auto md:m-5 ease-in-out duration-500  hover:scale-125">
                  {/* <Link href={`/articles/${e?.link}` || "#"}> */}
                <div className="cursor-pointer hover:shadow-slate-50">
                 <img className='w-80 h-60 rounded-xl shadow-sm border-white border-4' src={(e.image)} alt="" />
                </div>
                  {/* </Link> */}
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

