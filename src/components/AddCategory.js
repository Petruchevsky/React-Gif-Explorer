import React, { useState } from 'react'
import './AddCategory.css'

function AddCategory({ categories, setCategories }) {

  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setCategories([...categories, inputValue]);
    setInputValue('')
  }

  const handleChange = (ev) => {
    setInputValue(ev.target.value)
  }


  return (

    <div className='inputContainer'>

      <h2>Add Category</h2><br />
    <form onSubmit={handleSubmit}>
        <input 
          type="text"
          className='form-control'
          onChange={ handleChange }
          value={ inputValue }
           />
        <button 
          type='submit'
          className='btn btn-success'>
          Ok!
        </button>
    </form>

    </div>
  )
}

export default AddCategory;
