import { TodoContext, TodoProvider } from "../../TodoContext/TodoContext"
import "./TodoCounter.css"
export const TodoCounter = () => {
    return (
        <TodoProvider>
            <TodoContext.Consumer>
                {
                    ({
                        completed,
                        total,
                        isLoading
                    }) => (
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
            </TodoContext.Consumer>
        </TodoProvider>
    )
}