import React from 'react'
import LoginHeader from '../../components/LoginHeader'

const CostumizeApp2 = () => {
    const cards = [
        {
          text: 'Meditation',
        },
        {
          text: 'Breathing',
        },
        {
          text: 'Bedtime Stories',
        },
        {
          text: 'Nature Sounds',
        },
    ]
    return (
    <div>
      <LoginHeader />
      <div
        style={{
          backgroundImage: "url('/images/LandingPage.png')",
        }}
        className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center"
      >
          <div className="mt-40 flex h-full w-full flex-col items-center">
          <p className="text-center text-xl font-bold text-white ">
          What would you like to try for relaxation?
          </p>
          {cards?.map((e) => (
          <div className='top-0 my-4 flex items-center rounded-2xl bg-white px-32 py-3 text-xl font-bold text-black hover:bg-gradient-to-r hover:text-white from-blue-700 to-fuchsia-500 '>
                <span className='text-lg font-bold'>{e.text}</span>
          </div>
           ))}
            <a href='FCostumizing' className='bg-white text-black hover:bg-gradient-to-r from-blue-700 to-fuchsia-500 hover:text-white font-bold text-xl rounded-lg w-36 flex justify-center mt-6 p-2'>Continue</a>

          </div>
      </div>
    </div>
  )
}

export default CostumizeApp2;






