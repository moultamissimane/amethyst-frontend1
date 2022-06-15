import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
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

	const router = useRouter()
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs)
        setIsLoading(true)
        axios.post('http://localhost/AmethystBackend/user/register', inputs)
            .then(res => {
                // console.log(res.data)
                setIsLoading(false)
                localStorage.setItem('token', res.data.Token)
                localStorage.setItem('user', JSON.stringify(res.data.User))
                if (res.data.Token) {
                    setSnackBarMessage('Register Successful 🎉')
                    setSnackBarOpen(true)
                    setTimeout(() => {
                        router.push('/home')


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
        <motion.div className="min-h-screen">
            <div className="flex flex-col md:flex-row h-screen items-center">
                <div className="bg-white hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen">
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
                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="w-full ">
                        <h1 className="text-xl text-center md:text-2xl font-bold leading-tight mt-12">Create Account For Free🔮</h1>
                        <form className="mt-6" method="POST"
                            onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text" name="first_name" id="first_name" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#611295] focus:bg-white focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    onChange={handleChange}
                                    type="text" name="last_name" id="last_name" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#611295] focus:bg-white focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input
                                    onChange={handleChange}
                                    type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#611295] focus:bg-white focus:outline-none" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    onChange={handleChange}
                                    type="password" name="password" id="password" placeholder="Enter Password" minLength="2" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#611295] focus:bg-white focus:outline-none" />
                            </div>

                            <button
                                type="submit" className="w-full block bg-[#611295] hover:bg-[#4a0b75] focus:bg-[#4c0c76] text-white font-semibold rounded-lg  px-4 py-3 mt-6">Create Account</button>
                        </form>
                        <p className="mt-8 text-center">Already have an account?
                            <br />
                            <button className='text-[#611295] text-center text-xl hover:text-[#4a0b75] duration-500 ease-in-out hover:scale-125'>
                                <Link href="register">
                                    Login
                                </Link>
                            </button>
                        </p>
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

