import "./TodoCounter.css"
export const TodoCounter = ({ done, total }) => {
  return (
    done === total ?
      <h1 className="TodoCounter"> Has completado todas tus tareas 🥳</h1>
      :
      <h1 className="TodoCounter">
        Has completado
        <span> {done} </span>
        de <span> {total} </span> TODOS
      </h1>
  )
}