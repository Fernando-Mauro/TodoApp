import { TodoIcon } from "./TodoIcon"

export const DeleteIcon = ({handleDeleteTodos}) => {
  return (
    <TodoIcon
        type={"delete"}
        color={"gray"}
        onClick={handleDeleteTodos}
    />
  )
}
