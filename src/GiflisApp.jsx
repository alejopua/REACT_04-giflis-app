import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GiflisApp = () => {
  const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto', 'Bleach', 'HunterXHunter']);

  return (
    <>
      {/* Title */}
      <h1>GiflisApp</h1>

      {/* Input */}
      <AddCategory 
        setCategories={setCategories}
      />

      {/* List of Gif */}
      
      <ol>
        { categories.map( (category, index) => {
          return <li key={index}>{category}</li>
        })}
      </ol>


    </>
  )
}
