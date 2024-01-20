import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTodos, markAllCompleted } from '../redux/actions'

function FilterButton() {
const dispatch = useDispatch()
const currentFilter = useSelector((state) => state.filter)
const handleFilter = (filter) => {
dispatch(filterTodos(filter))
}

  return (
    <div className='flex space-x-4 items-center'>
<select className='text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none'
value={currentFilter}
onChange={(e) => handleFilter(e.target.value)}
>
    <option value="ALL">Default</option>
    <option value="COMPLETED">Completed</option>
    <option value="INCOMPLETE">Incomplete</option>
</select>

<button className='"text-sm px-2 py-1 bg-blue-600 text-white rounded ml-2' 
onClick={() => dispatch(markAllCompleted())}>
    Mark all completed.</button>
    </div>
  )
}

export default FilterButton