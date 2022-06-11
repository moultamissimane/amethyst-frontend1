import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { red, green } from '@mui/material/colors';


const index = () => {
  return (
    <div className=" min-w-screen relative min-h-screen overflow-auto">
      <Header />
      <section className="relative bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="relative mb-6 mt-14 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl">
            <div className="px-6 ">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <img
                      alt=""
                      src="/images/amethyst.jpg"
                      className="-ml-20 mt-20 w-40 rounded-full lg:-ml-16"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right"></div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                        22
                      </span>
                      <FavoriteIcon sx={{ color: red[400] }}/>
                      <span className="text-blueGray-400 text-sm">Likes</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-blueGray-600 block text-xl font-bold uppercase tracking-wide">
                        10
                      </span>
                      <BookmarkIcon sx={{ color: green[400] }}/>
                      <span className="text-blueGray-400 text-sm">
                        Bookmarked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="text-blueGray-700 mb-2 text-4xl font-semibold leading-normal">
                  Imane Moultamiss
                </h3>
                <div className="text-blueGray-400 mt-0 mb-2 text-sm font-bold uppercase leading-normal">
                  <i className="fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg"></i>
                  Playlists
                </div>
                {/* <div className="text-blueGray-600 mb-2 mt-10">
                  <i className="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="text-blueGray-600 mb-2">
                  <i className="fas fa-university text-blueGray-400 mr-2 text-lg"></i>
                  University of Computer Science
                </div> */}
              </div>
              <div className="border-blueGray-200 mt-10 border-t py-10 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-9/12">
                    <p className="text-blueGray-700 mb-4 text-lg leading-relaxed">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default index