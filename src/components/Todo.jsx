import React, { useState } from 'react'
import { BsSearch, BsPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

function Todo() {

const dispatch = useDispatch()    
const [newTodoText, setNewTodoText] = useState('')
const [searchTerm, setSearchTerm] = useState('')

const handleAddTodo = (text) => {
    dispatch(addTodo(text))
}

const handleAddTodoButton = () => {
if(newTodoText.trim() !== ''){
 handleAddTodo(newTodoText.trim())
 setNewTodoText('')
}
}

const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    dispatch(updateSearchTerm(e.target.value))
}


  return (
    <div className='max-w-4xl mx-auto sm:mt-8 p-2 bg-blue-50 rounded'>
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase' >My To-do App</h2>

<div className='flex items-center mb-4'>
    <input type="text" name='addTodoInput' id='addTodoInput' placeholder='Add Todo'
    className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
    value={newTodoText}
    onChange={(e) => setNewTodoText(e.target.value)}
    />
    <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
    onClick={handleAddTodoButton}
    ><BsPlus /></button>
</div>

<div className='flex flex-col sm:flex-row items-center justify-between gap-4"'>
<FilterButton />
    <div className='flex items-center mb-4'>
    <input type="text" name='' id='addTodoInput' placeholder='search'
    className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
    value={searchTerm}
    onChange={(e) => handleSearchChange(e)}
    />
    <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
    ><BsSearch/></button>
    </div>
</div>

<TodoList />
    </div>

  
  )
}

export default Todo