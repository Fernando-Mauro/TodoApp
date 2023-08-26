import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateTodoButton } from './components/CreateTodoButton/';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoContext } from './TodoContext/TodoContext';
import { useContext } from 'react';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import { TodoTitle } from './components/TodoTitle';
import { FilterTodos } from './components/FilterTodos';

export const App = () => {
	const { isLoading, err, filteredTodos, handleCompletedTodo, handleDeleteTodos , openModal} = useContext(TodoContext);
	return (
		<>
            <TodoTitle/>
			<TodoCounter />
			<TodoSearch />
            <hr className="my-4"/>

			<TodoList>
				{
					isLoading && <TodosLoading />
				}

				{
					err && <TodosError />
				}
				{
					(!isLoading && !err && filteredTodos.length === 0) && <EmptyTodos />
				}
				{
					filteredTodos.map(({ text, completed }, index) => (
						<TodoItem
							handleCompletedTodo={() => handleCompletedTodo(text)}
							handleDeleteTodos={() => handleDeleteTodos(text)}
							key={index} text={text} completed={completed}
						/>
					))
				}
			</TodoList>
			<CreateTodoButton />
			{
				openModal && (
					<Modal>
						<TodoForm/>
					</Modal>
				)

			}
		</>
	);
}