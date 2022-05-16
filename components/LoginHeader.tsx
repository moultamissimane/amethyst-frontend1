import React from 'react'

const LoginHeader = () => {
  return (
    <div className='bg-transparent fixed top-0 w-full left-0'>
      <nav className="relative px-6">
        <div className="flex flex-row items-center justify-between bg-transparent">
          <img src='/images/logo.png' className="w-40 p-2  hidden md:block lg:block xl:block"  />
          <img src='/images/logo_mobile.png' className="w-20 md:hidden lg:hidden xl:hidden  p-2" />

          <div className="flex flex-col items-center">
            <button className="rounded-lg p-2 md:hidden">
              
            </button>
            <div className="absolute inset-x-0 top-16 hidden  py-3 text-white shadow-md group-hover:block md:static md:block md:shadow-none">
              <div className="flex flex-row items-center justify-center text-center font-semibold text-white">
                <a
                  className="flex flex-col px-6 py-1 md:flex-row md:items-center"
                  href="#"
                >
                  Login
                </a>
                <a
                  className="flex flex-col px-6 py-1 md:flex-row md:items-center"
                  href="#"
                >
                  
                  Sign up
                </a>
                <a
                  className="flex rounded-full p-2 border-white border-4 flex-col px-6 py-1 md:flex-row md:items-center"
                  href="#"
                >
                  Try Amethyst for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LoginHeader;
