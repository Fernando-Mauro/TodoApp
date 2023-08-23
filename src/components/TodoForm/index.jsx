import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../TodoContext/TodoContext";

export const TodoForm = () => {
    const {handleOpenModal, handleAddTodo} = useContext(TodoContext);
    const [textAreaValue, setTextAreaValue] = useState("");
    
    const onSubmitTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            text: textAreaValue,
            completed: false
        };
        handleAddTodo({newTodo});
        handleOpenModal();
    }

    const onClickCancelButton = () => {
        handleOpenModal()
    }

    const onChangeTextAreaValue = ({target}) => {
        setTextAreaValue(target.value);
    }
    return (
        <form onSubmit={onSubmitTodo}>
            <label htmlFor="todo">Escribe tu nuevo TODO</label>
            <textarea
                name="todo"
                value={textAreaValue}
                onChange={onChangeTextAreaValue}
                required
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={onClickCancelButton}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    )
}
