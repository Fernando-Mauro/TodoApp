import { TodoIcon } from "./index.jsx"

export const CompletedIcon = ({completed, handleCompletedTodo}) => {
  return (
    <TodoIcon
        type={"check"}
        color={completed ? "green" : 'gray'}
        onClick={handleCompletedTodo}
    />
  )
}
