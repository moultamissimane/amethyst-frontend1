import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export const BurgerMenu = () => {
  return (
    <button>

    <div className=" z-10 md:flex xl:hidden h-8 w-8 text-white flex-col justify-around">
    <MenuIcon/>
    </div>
    </button>
  )
}
