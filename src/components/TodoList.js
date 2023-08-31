import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todos = useSelector((state)=>state.todos)
       
  return (
    <>
    {todos && todos.map(todo =>
        <div key={todo.id} >
        <TodoItem title={todo.title} completed={todo.completed} id={todo.id} />

    </div>
        ) }

        {todos.length <= 0 &&  <div className='mx-auto text-center font-semibold font-mono text-md relative top-10 leading-10 tracking-widest text-orange-600 scale-105'>Hola buddy,TodoList Is Empty...</div>}
    </>
  )
}

export default TodoList