import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton/';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { useLocalStorage } from './hooks/useLocalStorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

export const App = () => {
	const [inputvalue, setInputValue] = useState("");
	const [todos, saveTodos] = useLocalStorage({key: "TODOS_V1" , defaultStatue: []});

	const completed = todos.filter((todo) =>
		!!todo.completed
	).length;

	const total = todos.length;
	const filteredTodos = todos.filter(({ text }) => {
		const lowerCase = text.toLowerCase();
		const inputLowerCase = inputvalue.toLowerCase()
		return lowerCase.includes(inputLowerCase);
	}
	);

	const handleDeleteTodos = (text) => {
		const newTodos = todos.filter((todo) => {
			return todo.text !== text;
		})
		saveTodos(newTodos);
	}

	const handleCompletedTodo = (text) => {
		const newTodos = todos.map(todo => {
			if (todo.text === text) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		saveTodos(newTodos);
	}

	console.log('1');

	useLayoutEffect(() => {
		console.log('2');
	}, []);

	console.log('3');

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
						<TodoItem
							handleCompletedTodo={() => handleCompletedTodo(text)}
							handleDeleteTodos={() => handleDeleteTodos(text)}
							key={index} text={text} completed={completed}
						/>
					))
				}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}