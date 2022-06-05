import { NextPage } from 'next'
import React from 'react'

const dashboard: NextPage = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-auto flex-shrink-0 flex-col bg-white text-black antialiased ">
        <div className="fixed z-10 flex h-14 w-full items-center justify-between text-white">
          <div className="flex h-14 w-14 items-center justify-start border-none bg-blue-800 pl-3 md:w-64 md:justify-center">
            <img
              className="mr-2 h-7 w-7 overflow-hidden rounded-md md:h-10 md:w-10"
              src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            />
            <span className="hidden md:block">ADMIN</span>
          </div>
          <div className="flex w-full h-14 items-center justify-between bg-blue-800">
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

        <div className="sidebar fixed top-14 left-0 z-10 flex h-full w-14 flex-col border-none bg-blue-900 text-white transition-all duration-300 hover:w-64  md:w-64">
          <div className="flex flex-grow flex-col justify-between overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col space-y-1 py-4">
              <li className="hidden px-5 md:block">
                <div className="flex h-8 flex-row items-center">
                  <div className="text-sm font-light uppercase tracking-wide text-gray-400">
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
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Board
                  </span>
                  <span className="ml-auto hidden rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium tracking-wide text-blue-500 md:block">
                    New
                  </span>
                </a>
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Messages
                  </span>
                </a>
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Notifications
                  </span>
                  <span className="ml-auto hidden rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium tracking-wide text-red-500 md:block">
                    1.2k
                  </span>
                </a>
              </li>
              <li className="hidden px-5 md:block">
                <div className="mt-5 flex h-8 flex-row items-center">
                  <div className="text-sm font-light uppercase tracking-wide text-gray-400">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white-600 hover:text-white-800 relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 hover:border-blue-500 hover:bg-blue-800 focus:outline-none"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Profile
                  </span>
                </a>
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 truncate text-sm tracking-wide">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
            <p className="mb-14 hidden px-5 py-3 text-center text-xs md:block">
              Copyright @2021
            </p>
          </div>
        </div>
        {/* sidebar */}

        <div className="ml-14 mt-20 mb-10 h-full md:ml-64">
          

          {/* client table */}
          <div className="mx-4 mt-4">
            <div className="shadow-xs w-full overflow-hidden rounded-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 ">
                      <th className="px-4 py-3">User</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 ">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Hans Burger</p>
                            <p className="text-xs text-gray-600 ">
                              10x Developer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$855.85</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 ">
                          {' '}
                          Approved{' '}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">15-01-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 ">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Jolina Angelie</p>
                            <p className="text-xs text-gray-600">
                              Unemployed
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$369.75</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-yellow-100 px-2 py-1 font-semibold leading-tight text-yellow-700">
                          {' '}
                          Pending{' '}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">23-03-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Dave Li</p>
                            <p className="text-xs text-gray-600 ">
                              Influencer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$775.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-gray-100 px-2 py-1 font-semibold leading-tight text-gray-700 ">
                          {' '}
                          Expired{' '}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">09-02-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Rulia Joberts</p>
                            <p className="text-xs text-gray-600 ">
                              Actress
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$1276.75</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700 ">
                          {' '}
                          Approved{' '}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">17-04-2021</td>
                    </tr>
                    <tr className="bg-gray-50 text-gray-700 hover:bg-gray-100 ">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative mr-3 hidden h-8 w-8 rounded-full md:block">
                            <img
                              className="h-full w-full rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Hitney Wouston</p>
                            <p className="text-xs text-gray-600 ">
                              Singer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">$863.45</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="rounded-full bg-red-100 px-2 py-1 font-semibold leading-tight text-red-700">
                          {' '}
                          Denied{' '}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">11-01-2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="mx-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mr-2 bg-gray-100 p-6  sm:rounded-lg">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-800  sm:text-5xl">
                  Get in touch
                </h1>
                <p className="text-normal mt-2 text-lg font-medium text-gray-600  sm:text-2xl">
                  Fill in the form to submit any query
                </p>

                <div className="mt-8 flex items-center text-gray-600 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                    Dhaka, Street, State, Postal Code
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-600 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                    +880 1234567890
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-600 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="text-md ml-4 w-40 font-semibold tracking-wide">
                    info@demo.com
                  </div>
                </div>
              </div>
              <form className="flex flex-col justify-center p-6">
                <div className="flex flex-col">
                  <label className="hidden">Full Name</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-blue-500 focus:outline-none "
                  />
                </div>

                <div className="mt-2 flex flex-col">
                  <label className="hidden">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-blue-500 focus:outline-none "
                  />
                </div>

                <div className="mt-2 flex flex-col">
                  <label className="hidden">Number</label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-100 mt-2 rounded-lg border border-gray-400 bg-white py-3 px-3 font-semibold text-gray-800 focus:border-blue-500 focus:outline-none "
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 rounded-lg bg-blue-600 py-3 px-6 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-500  md:w-32"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* external chi haja */}
          </div>
      </div>
    </div>
  )
}

export default dashboard
