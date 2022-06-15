// perfecto
import React, { useState, useRef } from 'react'
import Dropdown from '../components/dropdownM'
import Link from 'next/link'
import { createPopper } from '@popperjs/core'
import { BurgerMenu } from '../components/BurgerMenu'

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full bg-transparent mix-blend-difference backdrop-blur-lg">
      <nav className="relative px-6">
        <div className="flex items-center justify-between">
          <img
            src="/images/logo.png"
            className="hidden w-40 p-2 md:block lg:block xl:block"
          />
          <img
            src="/images/logo_mobile.png"
            className="w-20 p-2 md:hidden lg:hidden xl:hidden"
          />
          
          <div
          className={`${
            active ? '' : 'hidden'
          }
          hidden justify-center font-semibold text-white w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <Link href="/home">
              <div className="flex cursor-pointer px-6 py-1 md:flex-row md:items-center">
                Home
              </div>
            </Link>
            <Link href="/sleep">
              <div className="flex cursor-pointer flex-col px-6 py-1 md:flex-row md:items-center">
                Sleep
              </div>
            </Link>
            <Link href="/meditation">
              <div className="flex cursor-pointer flex-col px-6 py-1 md:flex-row md:items-center">
                Meditation
              </div>
            </Link>
            <Link href="/meditationForKids">
              <div className="flex cursor-pointer flex-col px-6 py-1 md:flex-row md:items-center">
                Meditation for kids
              </div>
            </Link>
            <Link href="/amethyst">
              <div className="flex cursor-pointer flex-col px-6 py-1 md:flex-row md:items-center">
                Amethyst
              </div>
            </Link>
          </div>
          <div>
            <Dropdown />
          </div>
          <div
            
          >
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

// perfectoo
