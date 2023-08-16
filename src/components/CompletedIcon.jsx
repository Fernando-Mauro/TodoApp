import { TodoIcon } from "./TodoIcon"

export const CompletedIcon = ({completed, handleCompletedTodo}) => {
  return (
    <TodoIcon
        type={"check"}
        color={completed ? "green" : 'gray'}
        onClick={handleCompletedTodo}
    />
  )
}
