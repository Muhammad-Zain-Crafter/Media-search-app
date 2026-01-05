import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
       
        dispatch(setQuery(input))
        setInput('')
        
    }

  return (
    <div>
      <form className='flex items-center bg-gray-800 justify-center gap-4 px-14 py-6'
      onSubmit={(e) => submitHandler(e)}
      
      >
        <input className='border-2 px-4 py-2 rounded w-full outline-none'
        required
        type='text' 
        placeholder='search anything'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='border-2 px-4 py-2 rounded outline-none cursor-pointer active:scale-90'
        type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
