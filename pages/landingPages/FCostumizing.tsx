import React from 'react'
import { NextPage } from 'next'
import LoginHeader from '../../components/LoginHeader'

const FCostumizing: NextPage = () => {
  return (
    <div className="fixed">
      <LoginHeader />
      <div
        style={{
          backgroundImage: "url('/images/LandingPage.png')",
        }}
        className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
      >
        <div className="mt-40 flex h-full w-full flex-col items-center">
          <p className="text-center text-xl font-bold text-white ">
          Great You App Is Ready! Let's Help You Get some 
          <br />Comfortable Sleep
          </p>
          <a href='/auth/login' className="top-0 my-7 flex items-center rounded-2xl  bg-white  px-32 py-3 text-xl font-bold text-black hover:bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:text-white">
            Continue
          </a>
        </div>
      </div>
    </div>
  )
}

export default FCostumizing
