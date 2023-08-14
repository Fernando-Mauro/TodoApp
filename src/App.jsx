import './App.css';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

export const App = () => {
	return (
		<div className="App">
			<TodoCounter />

			<TodoSearch />

			<TodoList>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoList>

			<CreateTodoButton/>
		</div>
	);
}