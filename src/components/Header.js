import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import BgMobileDark from '../../public/images/bg-mobile-dark.jpg'
import BgMobileLight from '../../public/images/bg-mobile-light.jpg'
import BgDesktopDark from '../../public/images/bg-desktop-dark.jpg'
import BgDesktopLight from '../../public/images/bg-desktop-light.jpg'

const Header = () => {
  const { theme, setTheme } = useTheme('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme)

  return (
    <header className="w-full flex justify-between items-center">
      <Image
        className="absolute object-contain top-0 z-0 hidden lg:dark:hidden dark:block"
        fill
        alt="background image"
        objectPosition="top"
        src={BgMobileDark}
      />
      <Image
        className="absolute object-contain top-0 z-0 block dark:hidden lg:hidden"
        fill
        alt="background image"
        objectPosition="top"
        src={BgMobileLight}
      />
      <Image
        className="absolute object-contain top-0 z-0 hidden lg:dark:block"
        fill
        alt="background image"
        objectPosition="top"
        src={BgDesktopDark}
      />
      <Image
        className="absolute object-contain top-0 z-0 hidden lg:block dark:hidden"
        fill
        alt="background image"
        objectPosition="top"
        src={BgDesktopLight}
      />
      <h1 className="text-3xl font-bold text-white tracking-[10px] z-50">
        TODO
      </h1>
      <Image
        onClick={() => toggleTheme()}
        className="z-50 dark:hidden cursor-pointer"
        width="20"
        height="20"
        alt="toggle theme"
        src={`/images/icon-moon.svg`}
      />
      <Image
        onClick={() => toggleTheme()}
        className="z-50 hidden dark:block cursor-pointer"
        width="20"
        height="20"
        alt="toggle theme"
        src={`/images/icon-sun.svg`}
      />
    </header>
  )
}

export default Header
