'use client'

import AddTodo from '@/components/AddTodo'
import Header from '@/components/Header'
import Todos from '@/components/Todos'
import data from '@/app/data'
import { useState } from 'react'

export default function Home() {
  const [todos, setTodos] = useState(data)

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#171823]">
      <main className="flex min-h-screen flex-col items-center py-12 px-[26px] max-w-[540px] mx-auto">
        <Header />
        <AddTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </main>
    </div>
  )
}
