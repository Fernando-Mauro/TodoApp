import { useContext, useState } from "react";
import { DateFilteredTodo } from "../DateFIlteredTodo"
import { StatusFilteredTodo } from "../StatusFilteredTodo"
import { TodoContext } from "../../TodoContext/TodoContext";

export const FilterTodos = () => {
    
    const {handleOpenModal, handleAddTodo} = useContext(TodoContext);
    const [textAreaValue, setTextAreaValue] = useState("");
    
    const onSubmitTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            text: textAreaValue,
            completed: false
        };
        handleAddTodo({newTodo});
        handleOpenModal();
    }

    const onClickCancelButton = () => {
        handleOpenModal()
    }

    const onChangeTextAreaValue = ({target}) => {
        setTextAreaValue(target.value);
    }

    return (
        <form className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3 gap-2">
            <p className="small mb-0  text-muted">Filter</p>
            
            <StatusFilteredTodo/>
            <p className="small mb-0 ms-4  text-muted">Sort</p>
            
            <DateFilteredTodo/>
            
            <a href="#add" style={
                {
                    color: "#23af89",
                }
            } data-mdb-toggle="tooltip" title="Ascending">
                <i className="bi bi-sort-down-alt fs-2"></i>
            </a>
        </form>
    )
}
