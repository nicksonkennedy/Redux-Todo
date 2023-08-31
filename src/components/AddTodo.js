import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const AddTodo = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const addNewTodo = () =>{
        dispatch(addTodo({
            title: value
        }))
        setValue('')
    }
  return (
    <div>
        <input
         type='text' className='w-full p-3 border-[1px] border-slate-400 outline-none bg-slate-100 rounded-lg text-md font-semibold font-mono '
          value={value} 
          onChange={(e)=>setValue(e.target.value)}
          />
        <button className='px-4 py-1 bg-blueblue text-white font-semibold text-md mt-2' onClick={addNewTodo}>Submit</button>
    </div>
  )
}

export default AddTodo