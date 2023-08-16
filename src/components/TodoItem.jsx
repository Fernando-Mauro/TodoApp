import "./TodoItem.css"

export const TodoItem = ({ text , completed, handleDeleteTodos, handleCompletedTodo}) => {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={() => handleCompletedTodo(text)}>
                V
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
                {text}
            </p>
            <span className={`Icon Icon-delete`} onClick={() => handleDeleteTodos(text)}>
                X
            </span>
        </li>
    )
}
