import React from 'react'
import Circle from './Circle'
import Image from 'next/image'

const Todo = ({ todo, handleChange, handleCheck, handleDelete, index }) => {
  return (
    <div className={`flex items-center w-full px-5 py-3.5 z-50`}>
      <Circle
        checked={todo.completed}
        handleCheck={handleCheck}
        index={index}
      />
      <input
        value={todo.todo}
        onChange={(e) => handleChange(e, index)}
        className={`bg-white dark:bg-[#25273D] outline-none ml-3 w-full
         placeholder:text-[#9495A5] dark:placeholder:text-[#767992]
         text-[#494C6B] dark:text-[#C8CBE7] text-xs lg:text-lg
         ${todo.completed && 'line-through'}`}
      />
      <Image
        onClick={() => handleDelete(index)}
        className="cursor-pointer"
        width={18}
        height={18}
        alt="delete task icon"
        src="/images/icon-cross.svg"
      />
    </div>
  )
}

export default Todo
