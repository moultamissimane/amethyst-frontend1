import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { RegisterCp } from '../../components/auth/RegisterCp'

const Register: NextPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/LoginPhoto.png')",
      }}
      className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-center">
     
      <RegisterCp />
    </div>
  )
}

export default Register
