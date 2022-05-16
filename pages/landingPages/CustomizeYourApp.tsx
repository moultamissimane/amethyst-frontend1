import React from 'react'
import LoginHeader from '../../components/LoginHeader'

const CustomizeYourApp = () => {
    const cards = [
        {
          text: 'Anxiety/Stress',
        },
        {
          text: 'Family issues',
        },
        {
          text: 'Life issues',
        },
        {
          text: 'Other',
        },
    ]
    return (
    <div>
      <LoginHeader />
      <div
        style={{
          backgroundImage: "url('/images/LandingPagee.png')",
        }}
        className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
      >
          <div className="mt-40 flex h-full w-full flex-col items-center">
          <p className="text-center text-xl font-bold text-white ">
          What keeps you awake at night?
          </p>
          {cards?.map((e) => (
          <div className='top-0 my-4 flex items-center rounded-2xl  bg-white px-32 py-3 text-xl font-bold text-black hover:bg-gradient-to-r  '>
            <span className='text-lg font-bold'>{e.text}</span>
          </div>
           ))}
            <button className='bg-white text-black hover:bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:text-white font-bold text-xl rounded-lg w-36 flex justify-center mt-6 p-2'>Continue</button>

          </div>
          
      </div>
    </div>
  )
}

export default CustomizeYourApp






