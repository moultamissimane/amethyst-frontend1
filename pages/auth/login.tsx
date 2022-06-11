// import useSWR from 'swr'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { NextPage } from 'next'
import LoginCp from "../../components/auth/LoginCp"; 

// type Props = {
//   image: string
//   title?: string
//   type: string
//   btn: string
//   to?: string  
// }

const Login: NextPage = () => {
  return (
    <div>
     
      <LoginCp />
      
    </div>
  )
}
export default Login;
