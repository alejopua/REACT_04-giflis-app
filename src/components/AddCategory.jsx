import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
  const [newValue, setNewValue] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault();
    setNewValue('')
    newValue !== '' ? onNewCategory(newValue.trim()[0].toUpperCase() + newValue.trim().slice(1)) : null;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
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
