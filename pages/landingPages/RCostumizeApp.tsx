import React from 'react'
import { NextPage } from 'next'
import LoginHeader from '../../components/LoginHeader'

const RCostumizeApp: NextPage = () => {
  return (
    <div className="fixed">
      <LoginHeader />
      <div
        style={{
          backgroundImage: "url('/images/LandingPagee.png')",
        }}
        className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
      >
        <div className="mt-40 flex h-full w-full flex-col items-center">
          <p className="text-center text-xl font-bold text-white ">
            Customize Your Experience
            <br /> With Us To Know You More
          </p>
          <div className="top-0 my-7 flex items-center rounded-2xl  bg-white  px-32 py-3 text-xl font-bold text-black hover:bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:text-white">
            Continue
          </div>
          <div className="top-0 my-2 flex items-center rounded-2xl bg-white px-16 py-3 text-xl  font-bold text-black hover:bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:text-white">
            Ignore for the moment
          </div>
        </div>
      </div>
    </div>
  )
}

export default RCostumizeApp
