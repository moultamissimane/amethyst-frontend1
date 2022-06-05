import React from 'react'

export const LoginCp = () => {
	const [inputs, setInputs] = useState({})
    const navigate = useNavigate()

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

    useEffect(async () => {
        let user = await getUser()
        let token = getToken()
        if (user) {
            console.log(user, token)
        }
    }, [])

    const handleClose = () => {
        setSnackBarOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        setIsLoading(true)
        axios.post('http://localhost/app_api/user/login', inputs)
            .then(res => {
                console.log(res.data.Token)
                setIsLoading(false)
                localStorage.setItem('token', res.data.Token)
                localStorage.setItem('user', JSON.stringify(res.data.User))
                if (res.data.Token) {
                    setSnackBarMessage('Login Successful 🎉')
                    setSnackBarOpen(true)
                    setTimeout(() => {
                        navigate('/home')
                    }, 1000)
                }
                else {
                    setSnackBarMessage('Login Failed 😢💔')
                    setSnackBarOpen(true)
                }
            }
            )
    }
    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedin(false);
      };

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

		<div className="min-h-screen bg-no-repeat bg-cover bg-center"
			style="background-image: url('https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')">
			<div className="flex justify-end">
				<div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
					<div>

						<form>
							<div>
								<span className="text-sm text-gray-900">Welcome back</span>
								<h1 className="text-2xl font-bold">Login to your account</h1>
							</div>
							<div className="mt-5">
								<label className="block text-md mb-2" for="password">Password</label>
								<input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password"/>
							</div>
							<div className="my-3">
								<label className="block text-md mb-2" for="email">Email</label>
								<input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email"/>
							</div>
							<div className="flex justify-between">
								<div>
									<input className="cursor-pointer" type="radio" name="rememberme"/>
										<span className="text-sm">Remember Me</span>
								</div>
								<span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
							</div>
							<div className="">
								<button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
								<div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">

								<img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt=""/>
									<button >Or sign-in with google</button>
							</div>
					</div>
				</form>
				<p className="mt-8"> Dont have an account? <span className="cursor-pointer text-sm text-blue-600"> Join free today</span></p>
			</div>
		</div>
	</div>
</div>
  )
}
