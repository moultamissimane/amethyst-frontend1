import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
    return (
        <footer className="bg-black ">
            <div className=" px-6 py-8 mx-auto">
                <div className="grid gap-8 sm:grid-cols-2 ml-9 lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <div className="flex items-center ml-6 justify-between">
                            <img
                                src="/images/logo.png"
                                className="hidden w-40 p-2 md:block lg:block xl:block"
                            />
                        </div>
                        <p className='text-white indent-4'>
                            If you wake consistently at night or suffer from restless sleep patterns, these sleep meditations, talks,
                            and music tracks will help calm the mind and relax the body in preparation for sleep.
                        </p>
                    </div>
                    <div>
                        <div className="text-xs font-medium text-violet-400 uppercase">
                            Amethyst
                        </div>

                        <a href="../home"
                            className="block mt-5 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Home
                        </a>
                        <a href="../sleep"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Sleep
                        </a>
                        <a href="../meditation"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Meditation
                        </a>
                        <a href="../meditationForKids"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Meditation For Kids
                        </a>
                        <a href="../amethyst"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Amethyst
                        </a>
                        <a href="/meditation/PrePlaylist"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Playlists
                        </a>
                        <a href="../myAmethyst"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            My Amethyst
                        </a>
                    </div>
                    <div>
                        <div className="text-xs font-medium text-violet-400 uppercase">
                            More of Amethyst
                        </div>

                        <a href="../articles/ReadAboutAmethyst"
                            className="block mt-5 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Read About Amethyst
                        </a>
                        <a href="#"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Amethyst Music
                        </a>
                        <a href="#"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Amethyst Playlist
                        </a>
                        <a href="#"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Amethyst Courses
                        </a>
                        <a href="#"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Amethyst Topics
                        </a>
                        <a href="#"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Amethyst Workshops
                        </a>
                        <a href="#"
                            className="block mt-3 text-sm font-medium text-white duration-700  hover:text-gray-400 dark:hover:text-gray-200 ">
                            Learn to Meditate with Amethyst
                        </a>
                    </div>

                </div>

                <hr className="my-10 border-gray-200 dark:border-gray-700" />

                <div className="sm:flex sm:items-center lg:justify-evenly sm:justify-between">
                    <p className="text-sm text-violet-400">© Copyright 2021. All Rights Reserved.</p>

                    <div className='text-white text-center '>
                        <p>Made with💖by Amethyst</p>
                    </div>
                    <div className="flex mt-3 -mx-2 sm:mt-0">

                        <a href="https://github.com/moultamissimane" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Facebook">
                            <GitHubIcon className="w-5 h-5 fill-current text-violet-400" />

                        </a>

                        <a href="https://www.instagram.com/ame1hyst1/" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                            <InstagramIcon className="w-5 h-5 fill-current text-violet-400" />


                        </a>
                        <a href="#" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                            <FacebookIcon className="w-5 h-5 fill-current text-violet-400" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer