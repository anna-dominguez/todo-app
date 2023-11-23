import Image from 'next/image'
import React from 'react'

const Circle = ({ checked = false, handleCheck = () => {}, index = null }) => {
  return (
    <div
      onClick={() => handleCheck(checked, index)}
      className={`relative border border-[#E3E4F1] dark:border-[#393A4B] cursor-pointer ${
        checked === true
          ? 'bg-gradient-to-r from-[#55DDFF] to-[#C058F3]'
          : 'hover:border-[#55DDFF]'
      } w-5 h-5 rounded-full z-0`}
    >
      <Image
        width="10"
        height="10"
        alt="mark as completed icon"
        src="/images/icon-check.svg"
        className={`${
          checked ? 'visible' : 'hidden'
        } absolute z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}
      />
    </div>
  )
}

export default Circle
