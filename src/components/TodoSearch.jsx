import { useState } from "react"
import "./TodoSearch.css"

export const TodoSearch = () => {
  const [inputvalue, setInputValue] = useState("");

  return (
    <input
      placeholder="Cortar cabello 👨‍🦲"
      className="TodoSearch"
      value={inputvalue}
      
      onChange={({ target }) => {
        setInputValue(target.value);
      }}
    />
  )
}
