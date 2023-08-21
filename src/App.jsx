import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton/';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { useLocalStorage } from './hooks/useLocalStorage';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';

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
	const {items: todos, saveItems: saveTodos, isLoading, err} = useLocalStorage({ key: "TODOS_V1", defaultState: [] });
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

	return (
		<>
			<TodoCounter
				done={completed}
				total={total}
				isLoading={isLoading}
			/>

			<TodoSearch
				inputvalue={inputvalue}
				setInputValue={setInputValue}
			/>

			<TodoList>
				{
					isLoading && <TodosLoading/>
				}

				{
					err && <TodosError/>
				}
				{
					(!isLoading && !err && filteredTodos.length === 0) && <EmptyTodos/>
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
		</>
	);
}