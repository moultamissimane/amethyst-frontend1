import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { getUser, getToken } from '../../utils/index'

export const RegisterCp = () => {

  const [inputs, setInputs] = useState({})
  // const navigate = useNavigate()

  const [snackBarMessage, setSnackBarMessage] = useState('')
  const [snackBarOpen, setSnackBarOpen] = useState(false)

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({
          ...values,
          [name]: value
      }))
  }
  

  const handleClose = () => {
      setSnackBarOpen(false)
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs)
      setIsLoading(true)
      axios.post('http://localhost/AmethystBackend/user/register', inputs)
          .then(res => {
              console.log(res.data)
              setIsLoading(false)
              localStorage.setItem('token', res.data.Token)
              localStorage.setItem('user', JSON.stringify(res.data.User))
              if (res.data.Token) {
                  setSnackBarMessage('Register Successful 🎉')
                  setSnackBarOpen(true)
                  setTimeout(() => {
						<Link href={home}></Link>
                      
                  }, 1000)
              }
              else {
                  setSnackBarMessage('Register Failed 😢💔')
                  setSnackBarOpen(true)
              }
          }
          )
  }

  const [isLoading, setIsLoading] = useState(false)

  const action = (
      <>
          <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
          >
              <CloseIcon fontSize="small" />
          </IconButton>
      </>
  );

  return (
      <motion.div className='min-h-screen'>
          <div className="flex md:flex-row h-1/5 bg-slate-300 items-center">
              <div className="bg-slate-300 hidden lg:block w-1/5 md:w-1/2 xl:w-2/3 h-screen">
                  <div>
                      <div className="flex justify-center">
                      <div
								style={{
									backgroundImage: "url('/images/LoginPhoto.png')"
								}}
								className="flex h-screen bg-cover bg-center w-screen flex-col items-center justify-center">
							</div>
                      </div>
                  </div>

              </div>

              <div className="bg-white w-1/4 md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                  <div className="w-full ">

                      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create Account For Free🤑</h1>

                      <form className="mt-6" method="POST"
                          onSubmit={handleSubmit}>
                          <div>
                              <label className="block text-gray-700">First Name</label>
                              <input
                                  onChange={handleChange}
                                  type="text" name="first_name" id="" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-500 focus:bg-white focus:outline-none" />
                          </div>
                          <div>
                              <label className="block text-gray-700">Last Name</label>
                              <input
                                  onChange={handleChange}
                                  type="text" name="last_name" id="" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-500 focus:bg-white focus:outline-none" />
                          </div>
                          <div>
                              <label className="block text-gray-700">Email Address</label>
                              <input
                                  onChange={handleChange}
                                  type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-500 focus:bg-white focus:outline-none" />
                          </div>

                          <div className="mt-4">
                              <label className="block text-gray-700">Password</label>
                              <input
                                  onChange={handleChange}
                                  type="password" name="password" id="" placeholder="Enter Password" minLength="2" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-500 focus:bg-white focus:outline-none" />
                          </div>

                          <button
                              type="submit" className="w-full block bg-amber-500 hover:bg-amber-600 focus:bg-amber-400 text-white font-semibold rounded-lg  px-4 py-3 mt-6">Create Account</button>
                      </form>
                      <p className="mt-8">Already have an account? <Link to="Login" className="text-amber-500 hover:text-amber-600 font-semibold">Login Here😎</Link></p>
                  </div>
              </div>

          </div>
          {
              snackBarOpen &&
              <Snackbar
                  open={true}
                  autoHideDuration={6000}
                  message={snackBarMessage}
                  onClose={() => setSnackBarOpen(false)}
                  action={action}
                  severity="warning"
              />
          }
      </motion.div >
  )
        }
  // return (
  //   <div className="flex min-h-screen flex-col items-center justify-center">
  //     <div className="w-50 flex  max-w-md flex-col rounded-3xl bg-gray-100 px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10">
  //       <div className="self-center text-xl font-medium text-gray-800 sm:text-3xl">
  //         Welcome
  //       </div>
  //       <div className="mt-4 self-center text-xl text-gray-800 sm:text-sm">
  //         Enter your credentials to access your account
  //       </div>

  //       <div className="mt-10">
  //         <form action="POST">
  //           <div className="mb-5 flex flex-col">
  //             <label className="text-md mb-1 tracking-wide text-black">
  //               Full Name
  //             </label>
  //             <div className="relative">
  //               <div className="absolute left-0 top-0 inline-flex h-full w-10  items-center justify-center text-gray-400"></div>
  //               <input
  //                 id="email"
  //                 type="email"
  //                 name="email"
  //                 className="
  //                   w-full
  //                   rounded-2xl
  //                   border
  //                   border-gray-400
  //                   py-2
  //                   pl-5 pr-4
  //                   text-sm
  //                   placeholder-gray-500
  //                   focus:border-blue-400 focus:outline-none
  //                 "
  //                 placeholder="Enter your full name"
  //               />
  //             </div>
  //           </div>
  //           <div className="mb-5 flex flex-col">
  //             <label className="text-md mb-1 tracking-wide text-black">
  //               Email Address
  //             </label>
  //             <div className="relative">
  //               <div className="absolute left-0 top-0 inline-flex h-full w-10  items-center justify-center text-gray-400"></div>
  //               <input
  //                 id="email"
  //                 type="email"
  //                 name="email"
  //                 className="
  //                   w-full
  //                   rounded-2xl
  //                   border
  //                   border-gray-400
  //                   py-2
  //                   pl-5 pr-4
  //                   text-sm
  //                   placeholder-gray-500
  //                   focus:border-blue-400 focus:outline-none
  //                 "
  //                 placeholder="Enter your email"
  //               />
  //             </div>
  //           </div>
  //           <div className="mb-6 flex flex-col">
  //             <label className="text-md mb-1  tracking-wide text-black">
  //               Password
  //             </label>
  //             <div className="relative">
  //               <div
  //                 className="
  //                   absolute
  //                   left-0
  //                   top-0
  //                   inline-flex
  //                   h-full
  //                   w-10
  //                   items-center
  //                   justify-center
  //                   text-gray-400
  //                 "
  //               ></div>

  //               <input
  //                 id="password"
  //                 type="password"
  //                 name="password"
  //                 className="
  //                   w-full
  //                   rounded-2xl
  //                   border
  //                   border-gray-400
  //                   py-2
  //                   pl-5 pr-4
  //                   text-sm
  //                   placeholder-gray-500
  //                   focus:border-blue-400 focus:outline-none
  //                 "
  //                 placeholder="Enter your password"
  //               />
  //             </div>
  //           </div>

  //           <div className="mb-5 flex w-full">
  //             <button
  //               type="submit"
  //               className="mt-2 flex w-full items-center justify-center rounded-2xl bg-[#611295] py-2 text-sm text-white transition duration-150 ease-in hover:bg-[#46086E] focus:outline-none sm:text-base"
  //             >
  //               <span className="mr-2 uppercase">Sign In</span>
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //       <a
  //         href="#"
  //         target="_blank"
  //         className="inline-flex items-center text-center text-xs font-medium text-gray-700"
  //       >
  //         <span className="ml-2">
  //           You don't have an account?
  //           <a href="#" className="ml-2 text-xs font-semibold text-fuchsia-800">
  //             Register now
  //           </a>
  //         </span>
  //       </a>
  //     </div>
  //   </div>
  // )
}
