import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton/';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoContext, TodoProvider } from './TodoContext/TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

export const App = () => {

	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoProvider>
				<TodoContext.Consumer>
					{
						({
							isLoading,
							err,
							filteredTodos,
							handleCompletedTodo,
							handleDeleteTodos
						}) => (

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
						)
					}
				</TodoContext.Consumer>

			</TodoProvider>
			<CreateTodoButton />
		</>
	);
}