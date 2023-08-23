import { useContext } from "react"
import { TodoContext } from "../../TodoContext/TodoContext"
import "./CreateTodoButton.css"

export const CreateTodoButton = () => {
    const {handleOpenModal} = useContext(TodoContext)
    return (
        <button className="CreateTodoButton" onClick={handleOpenModal}
        >
            +
        </button>
    )
}
