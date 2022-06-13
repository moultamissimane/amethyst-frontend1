import React from 'react'
import Link from 'next/Link'

const LoginHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent">
      <nav className="relative px-6">
        <div className="flex flex-row items-center justify-between bg-transparent">
          <img
            src="/images/logo.png"
            className="hidden w-40  p-2 md:block lg:block xl:block"
          />
          <img
            src="/images/logo_mobile.png"
            className="w-20 p-2 md:hidden lg:hidden  xl:hidden"
          />

          <div className="flex flex-col items-center">
            <button className="rounded-lg p-2 md:hidden"></button>
            <div className="absolute inset-x-0 top-16 hidden  py-3 text-white shadow-md group-hover:block md:static md:block md:shadow-none">
              <div className="flex flex-row items-center justify-center text-center font-semibold text-white">
                <Link href="/Premium">
                  <div className="flex flex-col px-6 py-1 md:flex-row md:items-center">
                    Login
                  </div>
                </Link>

                <Link href="/Premium">
                  <div className="flex flex-col px-6 py-1 md:flex-row md:items-center">
                    Sign up
                  </div>
                </Link>

                <Link href="/Premium">
                  <div className="flex flex-col rounded-full border-4 border-white p-2 px-6 py-1 md:flex-row md:items-center">
                    Try Amethyst Premium
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LoginHeader
