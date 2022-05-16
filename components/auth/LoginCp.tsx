import React from 'react'

export const LoginCp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col  bg-gray-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Welcome Back
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access your account
        </div>

        <div className="mt-10">
          <form action="POST">
            <div className="flex flex-col mb-5">
              <label className="mb-1 text-md tracking-wide text-black">Email Address</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0  h-full w-10 text-gray-400">
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1 text-md  tracking-wide text-black">Password</label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                 
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full mb-5">
              <button
                type="submit"
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#611295] hover:bg-[#46086E] rounded-2xl py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Log In</span>
              </button>
            </div>
          </form>
        </div>
        <a
          href="#"
          target="_blank"
          className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
          <span className="ml-2">You don't have an account?
            <a
              href="#"
              className="text-xs ml-2 text-fuchsia-800 font-semibold"
              >Register now</a>
          </span>
        </a>
      </div>
    </div>
  )
}
