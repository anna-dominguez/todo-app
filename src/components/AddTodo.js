'use client'

import React, { useRef } from 'react'
import Circle from './Circle'

const AddTodo = ({ todos, setTodos }) => {
  const inputRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputRef.current.value) {
      setTodos([...todos, { todo: inputRef.current.value, completed: false }])
      inputRef.current.value = null
    }
  }

  return (
    <section className="mt-10 flex bg-white dark:bg-[#25273D] w-full px-5 py-3.5 rounded-[5px] z-50">
      <Circle />
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
        className="bg-white dark:bg-[#25273D] outline-none ml-3 w-full
         placeholder:text-[#9495A5] dark:placeholder:text-[#767992]
         text-[#494C6B] dark:text-[#C8CBE7] text-xs"
      />
    </section>
  )
}

export default AddTodo
