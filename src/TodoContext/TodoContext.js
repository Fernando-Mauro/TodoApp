import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();


export const TodoProvider = ({children}) => {
    const [inputvalue, setInputValue] = useState("");
    const { items: todos, saveItems: saveTodos, isLoading, err } = useLocalStorage({ key: "TODOS_V1", defaultState: [] });
    
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
        <TodoContext.Provider value={{
            isLoading, 
            err, 
            completed,
            total,
            filteredTodos,
            handleCompletedTodo,
            handleDeleteTodos        
        }}>
            {
                children
            }
        </TodoContext.Provider>
    )
}
