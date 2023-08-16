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
	const filteredTodos = todos.filter(({ text }) => {
		const lowerCase = text.toLowerCase();
		const inputLowerCase = inputvalue.toLowerCase()
		return lowerCase.includes(inputLowerCase);
	}
	)

	const handleDeleteTodos = (text) => {
		const newTodos = todos.filter(todo => {
			return todo.text !== text;
		})
		setTodos(newTodos);
	}

	const handleCompletedTodo = (text) => {
		setTodos(todos.map(todo => {
			if(todo.text === text) 
			todo.completed = !todo.completed;
			return todo;
		}))
	}
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
					filteredTodos.map(({ text, completed }, index) => (
						<TodoItem handleCompletedTodo={handleCompletedTodo} handleDeleteTodos={handleDeleteTodos} key={index} text={text} completed={completed} />
					))
				}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}