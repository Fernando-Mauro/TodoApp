import { CompletedIcon } from "../TodoIcon/CompletedIcon"
import { DeleteIcon } from "../TodoIcon/DeleteIcon"
import "./TodoItem.css"

export const TodoItem = ({ text , completed, handleDeleteTodos, handleCompletedTodo}) => {
    return (
        <li className="TodoItem">
            <CompletedIcon completed={completed} handleCompletedTodo={handleCompletedTodo}/>
            <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
                {text}
            </p>
            <DeleteIcon handleDeleteTodos={handleDeleteTodos}/>
        </li>
    )
}