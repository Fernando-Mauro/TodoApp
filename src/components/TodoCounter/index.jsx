import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext"
import "./TodoCounter.css";

export const TodoCounter = () => {
    const { completed, total, isLoading } = useContext(TodoContext)
    return (

        completed === total && !isLoading ?
            <h1 className="TodoCounter"> Has completado todas tus tareas 🥳</h1>
            :
            <h1 className="TodoCounter">
                Has completado
                <span> {completed} </span>
                de <span> {total} </span> TODOS
            </h1>

    )
}