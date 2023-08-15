export const TodoCounter = ({ done, total}) => {
  return (
    <h1 className="TodoCounter">
        Has completado 
        <span> {done} </span>
        de <span> {total} </span> TODOS
    </h1>
  )
}