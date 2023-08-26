import { useContext } from "react";
import "./TodoSearch.css"
import { TodoContext } from "../../TodoContext/TodoContext";

export const TodoSearch = () => {

    const {inputvalue, setInputValue} = useContext(TodoContext);
    
    return (
        <input
            placeholder="Seguir a ferma.dev 🐸"
            className="TodoSearch"
            value={inputvalue}

            onChange={({ target }) => {
                setInputValue(target.value);
            }}
        />
    )
}
