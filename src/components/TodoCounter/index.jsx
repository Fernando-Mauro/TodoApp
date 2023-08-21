import "./TodoCounter.css"
export const TodoCounter = ({ done, total, isLoading }) => {
  return (
    done === total && !isLoading ?
      <h1 className="TodoCounter"> Has completado todas tus tareas 🥳</h1>
      :
      <h1 className="TodoCounter">
        Has completado
        <span> {done} </span>
        de <span> {total} </span> TODOS
      </h1>
  )
}