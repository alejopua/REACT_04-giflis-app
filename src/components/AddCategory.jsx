import PropTypes from 'prop-types'
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [newValue, setNewValue] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault();
    setNewValue('')
    newValue !== '' ? onNewCategory(newValue.trim()[0].toUpperCase() + newValue.trim().slice(1)) : null;
  }

  return (
    <>
      <form onSubmit={onSubmit} aria-label='form'>
        <input 
          type="text"
          value={newValue} 
          placeholder="Insert new giflis" 
          onChange={(e) => setNewValue(e.target.value)}
        />
      </form>
    </>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
