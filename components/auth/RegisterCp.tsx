import React from 'react'

export const RegisterCp = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-50 flex  max-w-md flex-col rounded-3xl bg-gray-100 px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10">
        <div className="self-center text-xl font-medium text-gray-800 sm:text-3xl">
          Welcome
        </div>
        <div className="mt-4 self-center text-xl text-gray-800 sm:text-sm">
          Enter your credentials to access your account
        </div>

        <div className="mt-10">
          <form action="POST">
            <div className="mb-5 flex flex-col">
              <label className="text-md mb-1 tracking-wide text-black">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 inline-flex h-full w-10  items-center justify-center text-gray-400"></div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-5 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  "
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col">
              <label className="text-md mb-1 tracking-wide text-black">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 inline-flex h-full w-10  items-center justify-center text-gray-400"></div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-5 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col">
              <label className="text-md mb-1  tracking-wide text-black">
                Password
              </label>
              <div className="relative">
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  "
                ></div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-5 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="mb-5 flex w-full">
              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center rounded-2xl bg-[#611295] py-2 text-sm text-white transition duration-150 ease-in hover:bg-[#46086E] focus:outline-none sm:text-base"
              >
                <span className="mr-2 uppercase">Sign In</span>
              </button>
            </div>
          </form>
        </div>
        <a
          href="#"
          target="_blank"
          className="inline-flex items-center text-center text-xs font-medium text-gray-700"
        >
          <span className="ml-2">
            You don't have an account?
            <a href="#" className="ml-2 text-xs font-semibold text-fuchsia-800">
              Register now
            </a>
          </span>
        </a>
      </div>
    </div>
  )
}
