import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({setCategories}) => {
  const [newValue, setNewValue] = useState('')

  const onSubmit = (e) =>{
    e.preventDefault();
    newValue !== '' ? setCategories((cat) => [...cat, newValue]) : null;
    setNewValue('')
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
