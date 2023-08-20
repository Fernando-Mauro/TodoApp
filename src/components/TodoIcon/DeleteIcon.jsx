import { TodoIcon } from "./index.jsx"

export const DeleteIcon = ({handleDeleteTodos}) => {
  return (
    <TodoIcon
        type={"delete"}
        color={"gray"}
        onClick={handleDeleteTodos}
    />
  )
}
