import { useState } from 'react';
import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos = [
	{
		text: "Caminar",
		completed: false
	},
	{
		text: "Curso React",
		completed: true
	},
	{
		text: "Comer",
		completed: false
	},
	{
		text: "Dormir",
		completed: true
	},
	{
		text: "Funar",
		completed: true
	},

];

export const App = () => {
	const [inputvalue, setInputValue] = useState("");

	const [todos, setTodos] = useState(defaultTodos);

	const completed = todos.filter((todo) =>
		!!todo.completed
	).length;

	const total = todos.length;

	return (
		<>
			<TodoCounter
				done={completed}
				total={total}
			/>

			<TodoSearch
				inputvalue={inputvalue}
				setInputValue={setInputValue}
			/>

			<TodoList>
				{
					todos.map(({ text, completed }, index) => {
						if (text.includes(inputvalue)) {
							return (
								<TodoItem text={text} completed={completed} key={index} />
							)
						}
					}
					)
				}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}