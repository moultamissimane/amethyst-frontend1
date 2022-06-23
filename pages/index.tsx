import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [])
  return <div>redirecting ...</div>
}

export default index
