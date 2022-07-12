import React, { Dispatch, FC, useState } from 'react'
// import Swal from 'sweetalert2'
import LoginHeader from '../../components/LoginHeader'

type PopupProps = {
  setshowPopup :Dispatch<React.SetStateAction<boolean>>
}

const PopupSweet:FC<PopupProps> = ({setshowPopup}) => {
  return (
    <div className="absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-10">
      <div className="rounded-lg bg-white p-3 ">
        <div className="w-full flex flex-col justify-end">
          <span>
            an audio will start right after the login 💖
          </span>
          <button onClick={()=>setshowPopup((value)=>!value)}>
            I understand
          </button>
        </div>
      </div>

    </div>
  )
}

const LastStep = () => {
  const [showPopup, setshowPopup] = useState(false)

  return (
    <div className="relative flex min-h-screen min-w-full items-center justify-center overflow-auto bg-black ">
      <LoginHeader />
      {showPopup && <PopupSweet setshowPopup={setshowPopup} />}
      <div>
        <button
          
          onClick={() => setshowPopup(true)}
          className="rounded-xl bg-white text-black "
        >
          Click me
        </button>
      </div>
    </div>
  )
}

export default LastStep
