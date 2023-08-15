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

];

export const App = () => {
	return (
		<div className="App">
			<TodoCounter done={10} total={20} />

			<TodoSearch />

			<TodoList>
				{
					defaultTodos.map(({text, completed}, index) => {
						return(
							<TodoItem text={text} completed={completed} key={index}/>
						)}
					)
				}
			</TodoList>

			<CreateTodoButton />
		</div>
	);
}