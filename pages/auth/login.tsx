// import useSWR from 'swr'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { NextPage } from 'next'
import  {LoginCp} from "../../components/auth/LoginCp"; 

// type Props = {
//   image: string
//   title?: string
//   type: string
//   btn: string
//   to?: string  
// }

const Login: NextPage = () => {
  return (
    <div
    style={{
        backgroundImage:"url('/images/LoginPhoto.png')"
    }}
    className="flex h-screen bg-cover bg-center w-screen flex-col items-center justify-center">
      {/* <Image
        src="/images/LoginPhoto.png"
        width={2400}
        height={1598}
        alt="loginPhoto"
      /> */}
      <LoginCp />
      {/* <div className="mb-3 bg-white text-lime-500">Login</div>
      <div className="bg-white">another div</div> */}
    </div>
  )
}
export default Login;
