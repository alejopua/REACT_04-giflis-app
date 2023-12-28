import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiflisApp = () => {
  const [ categories, setCategories ] = useState(['Samurai X']);

  const onAddCategory = (newValue) =>{
    if (categories.includes(newValue)) return;
    setCategories((cat) => [ newValue, ...cat ]);
  }

  return (
    <>

      <h1>GiflisApp</h1>

      <AddCategory 
        onNewCategory={onAddCategory}
      />

      { 
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }

    </>
  )
}
