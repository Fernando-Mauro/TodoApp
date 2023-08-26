import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();


export const TodoProvider = ({ children }) => {
    const [inputvalue, setInputValue] = useState("");
    const { items: todos, saveItems: saveTodos, isLoading, err } = useLocalStorage({ key: "TODOS_V1", defaultState: [] });

    const [openModal, setOpenModal] = useState(false);
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

    const handleAddTodo = ({ newTodo }) => {
        const newTodos = [...todos, newTodo];
        saveTodos(newTodos);
    }
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
    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }
    return (
        <TodoContext.Provider value={{
            completed,
            err,
            filteredTodos,
            handleAddTodo,
            handleCompletedTodo,
            handleDeleteTodos,
            handleOpenModal,
            isLoading,
            openModal,
            setInputValue,
            total,
        }}>
            {
                children
            }
        </TodoContext.Provider>
    )
}
