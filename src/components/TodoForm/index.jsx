import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../../TodoContext/TodoContext";

export const TodoForm = () => {
    const { handleOpenModal, handleAddTodo } = useContext(TodoContext);
    const [textAreaValue, setTextAreaValue] = useState("");

    const onSubmitTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            text: textAreaValue,
            completed: false
        };
        handleAddTodo({ newTodo });
        handleOpenModal();
    }

    const onClickCancelButton = () => {
        handleOpenModal()
    }

    const onChangeTextAreaValue = ({ target }) => {
        setTextAreaValue(target.value);
    }

    return (
        <div className="container w-50">
            <div className="row">
                <div className="col-sm">
                    <form onSubmit={onSubmitTodo} className="mb-4 p-5 bg-white rounded">
                        <div className="form-group">
                            <label htmlFor="todo" className="text-dark text-center ">
                                Escribe tu nuevo TODO
                            </label>
                            <textarea
                                className="form-control"
                                name="todo"
                                value={textAreaValue}
                                onChange={onChangeTextAreaValue}
                                required
                            />
                        </div>
                        <div className="TodoForm-buttonContainer d-flex justify-content-between mt-3">
                            <button className="btn btn-danger" onClick={onClickCancelButton}>
                                Cancelar
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}



