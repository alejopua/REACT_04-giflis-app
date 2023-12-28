import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GiflisApp = () => {
  const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto', 'Bleach', 'HunterXHunter']);

  const onAddCategory = (newValue) =>{
    if (categories.includes(newValue)) return;
    setCategories((cat) => [...cat, newValue]);
  }

  return (
    <>
      {/* Title */}
      <h1>GiflisApp</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory={onAddCategory}
      />

      {/* List of Gif */}
      
      <ol>
        { categories.map( (category) => {
          return <li key={category}>{category}</li>
        })}
      </ol>


    </>
  )
}
