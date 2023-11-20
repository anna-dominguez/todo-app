import React from 'react'
import Image from 'next/image'
import BgMobileDark from '../../public/images/bg-mobile-dark.jpg'
import BgMobileLight from '../../public/images/bg-mobile-light.jpg'
import BgDesktopDark from '../../public/images/bg-desktop-dark.jpg'
import BgDesktopLight from '../../public/images/bg-desktop-light.jpg'

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Image
        className="absolute object-contain top-0 z-0 hidden lg:hidden dark:block"
        fill
        alt="background image"
        objectPosition="top"
        src={BgMobileDark}
      />
      <Image
        className="absolute object-contain top-0 z-0 dark:hidden lg:hidden"
        fill
        alt="background image"
        objectPosition="top"
        src={BgMobileLight}
      />
      <Image
        className="absolute object-contain top-0 z-0 hidden dark:block lg:dark:block"
        fill
        alt="background image"
        objectPosition="top"
        src={BgDesktopDark}
      />
      <Image
        className="absolute object-contain top-0 z-0 hidden lg:block lg:dark:hidden"
        fill
        alt="background image"
        objectPosition="top"
        src={BgMobileLight}
      />
      <h1 className="text-3xl font-bold text-white tracking-[10px] z-50">
        TODO
      </h1>
      <Image
        className="z-50"
        width="20"
        height="20"
        src={`/images/icon-moon.svg`}
      />
    </header>
  )
}

export default Header
