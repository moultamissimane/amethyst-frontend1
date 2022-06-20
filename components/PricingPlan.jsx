import React, { useState } from 'react'
import Link from 'next/link'
import { RadioGroup } from '@headlessui/react'


const pricingPlan = () => {
    let [plan, setPlan] = useState('Standard')
    return (

        <div className="bg-black">
            <RadioGroup value={plan} onChange={setPlan}>
                <RadioGroup.Label>Plan</RadioGroup.Label>
                {/* <RadioGroup.Option value="startup">
                    {({ checked }) => (
                        <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
                    )}
                </RadioGroup.Option> */}
                {/* <RadioGroup.Option value="business">
                    {({ checked }) => (
                        <span className={checked ? 'bg-blue-200' : ''}>Business</span>
                    )}
                </RadioGroup.Option> */}
                <RadioGroup.Option value="enterprise">
                    {({ checked }) => (
                        <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
                    )}
                </RadioGroup.Option>
            </RadioGroup>

            <div className="container px-6 py-8 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-white capitalize lg:text-4xl ">Simple pricing plan</h1>
                <p className="max-w-2xl mx-auto mt-4 text-center text-gray-300 xl:mt-6 ">
                    Get Amethyst Premium Now and benefits from a lot of plans !
                </p>
                <RadioGroup value={plan} onChange={setPlan}>

                    <div
                        value={plan} onChange={setPlan}
                        className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
                        <RadioGroup.Option value="Basic">
                            {({ checked }) => (
                                <div className={checked ? 'flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-xl border-purple-600 ' : 'border-gray-700 flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-xl '}>
                                    <div
                                        value="Basic"
                                        className="flex flex-col items-center space-y-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={checked ? "w-5 h-5 text-purple-600 sm:h-7 sm:w-7" : "w-5 h-5 text-gray-400 sm:h-7 sm:w-7"} viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <h2 className="text-lg font-medium  sm:text-xl text-gray-200">Basic</h2>
                                    </div>

                                    <h2 className={checked ? "text-2xl font-semibold text-purple-600 sm:text-3xl " : "text-2xl font-semibold sm:text-3xl text-gray-300"}>Free</h2>
                                </div>
                            )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="Standard">
                            {({ checked }) => (

                                <div className={checked ? 'flex items-center justify-between px-8 py-4 border-2 border-purple-600 cursor-pointer rounded-xl' : 'border-gray-700 flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-xl '}>
                                    <div className="flex flex-col items-center space-y-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={checked ? "w-5 h-5 text-purple-600 sm:h-7 sm:w-7" : "w-5 h-5 text-gray-400 sm:h-7 sm:w-7"} viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <h2 className="text-lg font-medium  sm:text-xl text-gray-200">Standard</h2>
                                    </div>

                                    <div className="flex flex-col items-center space-y-1">
                                        <div className={checked ? "px-2 text-xs text-purple-600  rounded-full  sm:px-4 sm:py-1 bg-gray-900 " : 'text-gray-100 px-2 text-xs   rounded-full  sm:px-4 sm:py-1 bg-gray-900'}>
                                            Save 30%
                                        </div>

                                        <h2 className={checked ? "text-2xl font-semibold text-purple-600 sm:text-3xl " : "text-2xl font-semibold sm:text-3xl text-gray-300"}>$139 <span className="text-base font-medium">/Yearly</span></h2>
                                    </div>
                                </div>
                            )}

                        </RadioGroup.Option>
                        <RadioGroup.Option value="Pro">
                            {({ checked }) => (

                                <div className={checked ? 'flex items-center justify-between px-8 py-4 border-2 border-purple-600 cursor-pointer rounded-xl' : 'border-gray-700 flex items-center justify-between px-8 py-4 border-2 cursor-pointer rounded-xl '}>
                                    <div className="flex flex-col items-center space-y-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={checked ? "w-5 h-5 text-purple-600 sm:h-7 sm:w-7" : "w-5 h-5 text-gray-400 sm:h-7 sm:w-7"} viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>

                                        <h2 className="text-lg font-medium  sm:text-xl text-gray-200">Pro</h2>
                                    </div>

                                    <div className="flex flex-col items-center space-y-1">
                                        <div className={checked ? "px-2 text-xs text-purple-600  rounded-full  sm:px-4 sm:py-1 bg-gray-900 " : 'text-gray-100 px-2 text-xs   rounded-full  sm:px-4 sm:py-1 bg-gray-900'}>
                                            Save 20%
                                        </div>

                                        <h2 className={checked ? "text-2xl font-semibold text-purple-600 sm:text-3xl " : "text-2xl font-semibold sm:text-3xl text-gray-300"}>$89 <span className="text-base font-medium">/Month</span></h2>
                                    </div>
                                </div>
                            )}

                        </RadioGroup.Option>
                    </div>

                </RadioGroup>

                <div className="p-8 mt-8 space-y-8 bg-gray-800 rounded-xl">
                    <div className="flex items-center justify-between  text-gray-200">
                        <p className="textlg sm:text-xl">Unlimited Links</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between  text-gray-200">
                        <p className="textlg sm:text-xl">Own analytics platfrom</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between  text-gray-200">
                        <p className="textlg sm:text-xl">Full Support with discussion</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between  text-gray-200">
                        <p className="textlg sm:text-xl">Optimize hashtags</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between  text-gray-200">
                        <p className="textlg sm:text-xl">Mobile app</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-600 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between  text-gray-200">
                        <p className="textlg sm:text-xl">Unlimited users</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <Link href="/home">
                        <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none ">
                            Choose Plan
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    )
}
export default pricingPlan
// import React, { useState } from 'react'
// import { RadioGroup } from '@headlessui/react'

// export const PricingPlan = () => {
//   let [plan, setPlan] = useState('startup')

//   return (
//         <RadioGroup value={plan} onChange={setPlan}>
//           <RadioGroup.Label>Plan</RadioGroup.Label>
//           <RadioGroup.Option value="startup">
//             {({ checked }) => (
//                   <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
//                 )}
//               </RadioGroup.Option>
//               <RadioGroup.Option value="business">
//                 {({ checked }) => (
//                       <span className={checked ? 'bg-blue-200' : ''}>Business</span>
//                     )}
//       </RadioGroup.Option>
//       <RadioGroup.Option value="enterprise">
//         {({ checked }) => (
//           <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
//         )}
//       </RadioGroup.Option>
//     </RadioGroup>
//   )
// }