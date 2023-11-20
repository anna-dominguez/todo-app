import React, { useState } from 'react'
import Todo from './Todo'

const Todos = ({ todos, setTodos }) => {
  const [active, setActive] = useState(0)

  const handleChange = (e, index) => {
    let items = [...todos]
    let item = { ...todos[index] }
    item.todo = e.target.value
    items[index] = item
    setTodos([...items])
  }

  const handleCheck = (completed, index) => {
    let items = [...todos]
    let item = { ...todos[index] }
    item.completed = !completed
    items[index] = item
    setTodos([...items])
  }

  const handleDelete = (indexToDelete) => {
    setTodos([...todos].filter((elem, index) => index !== indexToDelete))
  }

  const handleClearCompleted = () => {
    setTodos([...todos.filter(({ completed }) => !completed)])
  }

  return (
    <section
      className="z-50 mt-4 lg:mt-6 w-full divide-y divide-[#393A4B]
               bg-white dark:bg-[#25273D] rounded-[5px]"
    >
      {todos
        .filter((todo) => {
          if (active === 0) return todo
          else if (active === 1) return !todo.completed
          else if (active === 2) return todo.completed
        })
        .map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              index={index}
              handleChange={handleChange}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )
        })}
      <div className="text-[#5B5E7E] flex justify-between p-5 text-xs tracking-[-0.167px relative">
        <p>{todos.filter(({ completed }) => !completed).length} items left</p>
        <div
          className="flex absolute lg:static bg-white dark:bg-[#25273D] rounded-[5px]
                    -bottom-20 p-5 lg:p-0 left-0 gap-5 w-full lg:w-fit justify-center font-bold text-sm
                    "
        >
          <p
            onClick={() => setActive(0)}
            className={`cursor-pointer hover:text-[#E3E4F1] ${
              active === 0 && 'text-[#3A7CFD]'
            }`}
          >
            All
          </p>
          <p
            onClick={() => setActive(1)}
            className={`cursor-pointer hover:text-[#E3E4F1] ${
              active === 1 && 'text-[#3A7CFD]'
            }`}
          >
            Active
          </p>
          <p
            onClick={() => setActive(2)}
            className={`cursor-pointer hover:text-[#E3E4F1] ${
              active === 2 && 'text-[#3A7CFD]'
            }`}
          >
            Completed
          </p>
        </div>
        <p
          className="cursor-pointer hover:text-[#E3E4F1]"
          onClick={() => handleClearCompleted()}
        >
          Clear Completed
        </p>
      </div>
    </section>
  )
}

export default Todos
