// perfecto
import React from 'react'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-transparent mix-blend-difference backdrop-blur-sm">
      <nav className="relative px-6">
        <div className="flex items-center justify-between">
          <img
            src="/images/logo.png"
            className="hidden w-40 p-2 md:block lg:block xl:block"
          />
          <img
            src="/images/logo_mobile.png"
            className="w-20 p-2 md:hidden lg:hidden xl:hidden"
          />
          <div className="flex w-full justify-center font-semibold text-white">
            <a className="flex px-6 py-1 md:flex-row md:items-center" href="#">
              Home
            </a>
            <a
              className="flex flex-col px-6 py-1 md:flex-row md:items-center"
              href="#"
            >
              Sleep
            </a>
            <a
              className="flex flex-col px-6 py-1 md:flex-row md:items-center"
              href="#"
            >
              Meditation
            </a>
            <a
              className="flex flex-col px-6 py-1 md:flex-row md:items-center"
              href="#"
            >
              Profile
            </a>
          </div>
            <div>
              <a
                className="flex flex-col rounded-full text-white border-4 border-white p-2 px-6 py-1 md:flex-row md:items-center"
                href="#"
              >
                Username
              </a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

// perfectoo
