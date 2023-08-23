import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext"
import "./TodoCounter.css";
import { SoundComponent } from "../SoundComponent";

export const TodoCounter = () => {
    const { completed, total, isLoading } = useContext(TodoContext)

    return (
        total === 0 ? (
            <>
                <h1 className="TodoCounter">No tienes tareas por hacer 🎉</h1>
            </>
        ) : (
            completed === total && !isLoading ? (
                <>
                    <h1 className="TodoCounter"> Has completado todas tus tareas 🥳</h1>
                    <SoundComponent playSound={true} />
                </>
            ) : (
                <h1 className="TodoCounter">
                    Has completado
                    <span> {completed} </span>
                    de <span> {total} </span> TODOS
                </h1>
            )
        )
    )
}