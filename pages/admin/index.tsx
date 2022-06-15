import { NextPage } from 'next'
import React from 'react'
import { AudioUploader } from '../../components/AudioUploader'

const dashboard: NextPage = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
        <div className="fixed z-10 flex h-14 w-full items-center justify-between text-white">
          <div className="flex h-14 w-14 items-center justify-start border-none bg-violet-800 pl-3 md:w-64 md:justify-center">
            <img
              className="mr-2 h-7 w-7 overflow-hidden rounded-full md:h-10 md:w-10"
              src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            />
            <span className="hidden md:block">Admin</span>
          </div>
          <div className="flex w-full h-14 items-center justify-between bg-violet-800">
            <div className="ml-20 flex w-full max-w-xl items-center rounded border border-gray-200 bg-white p-2 shadow-sm">
              <button className="outline-none focus:outline-none">
                <svg
                  className="h-5 w-5 cursor-pointer text-gray-600"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="w-full bg-transparent pl-3 text-sm text-black outline-none focus:outline-none"
              />
            </div>
            <ul className="flex items-center">
              <li>
                
              </li>
              <li>
                <div className="mx-3 block h-6 w-px bg-gray-400 "></div>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-4 flex items-center hover:text-blue-100"
                >
                  <span className="mr-1 inline-flex">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar fixed top-14 left-0 z-10 flex h-full w-14 flex-col border-none bg-violet-900 text-white transition-all duration-300 hover:w-64  md:w-64">
          <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col space-y-1 py-4">
              <li className="hidden px-5 md:block">
                <div className="flex h-8 flex-row items-center">
                  <div className="text-sm font-bold uppercase tracking-wide text-white ">
                    Main
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none "
                >
                  <span className="ml-4 inline-flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Dashboard
                  </span>
                </a>
              </li>
            </ul>
            <p className="mb-14 hidden px-5 py-3 text-center text-xs md:block">
              Copyright @2022
            </p>
          </div>
        </div>
        {/* sidebar */}

        <div className="ml-14 mt-20 mb-10  h-full md:ml-64">
          <AudioUploader />
          </div>
      </div>
    </div>
  )
}

export default dashboard
