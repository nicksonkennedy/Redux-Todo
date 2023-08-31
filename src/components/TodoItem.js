import React from 'react'
import { DeleteOutline } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { toggleComplete , deleteTodo } from '../redux/todoSlice'

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const toggleHandler = () =>{
        dispatch(toggleComplete({id:id , completed: !completed}))
    }

    const deleteHandler = () =>{
        dispatch(deleteTodo({id:id}))
    }
  return (
    <div className={completed ? 'relative top-5 flex justify-between p-4 border-[1px] border-slate-200 bg-green-100 shadow-2xl': 'relative top-5 flex justify-between p-4 border-[1px] border-slate-200 '} >
    <div className='flex space-x-3'>
           <input 
           type='checkbox'
           checked={completed}
          onChange={toggleHandler}
           />

           <span className='relative left-1 font-semibold font-mono'>{title}</span>
       </div>

       <button onClick={deleteHandler} ><DeleteOutline style={{color:'white', background:'black', borderRadius:'100%'}}  /></button>
    </div>
  )
}

export default TodoItem