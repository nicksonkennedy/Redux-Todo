import {  } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css'; 
import { CheckCircleOutline } from '@mui/icons-material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  
   
  return (
   <>
   <div className='max-w-[30rem] mx-auto p-4 bg-gray-100 shadow-2xl relative top-10 h-auto'>
    <h1 className='text-center font-extrabold text-4xl'>ToDo App <CheckCircleOutline className='relative left-5 bottom-1' style={{fontSize:'3rem'}} /></h1>

    <AddTodo />
    <TodoList />

    <div className='p-4'></div>
   </div>
   </>
  );
}

export default App;
