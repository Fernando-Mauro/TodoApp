import "./TodoSearch.css"

export const TodoSearch = ({inputvalue, setInputValue}) => {

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
