import { useContext, useRef, useState } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import DatePicker from 'react-datepicker';

export const TodoSearch = () => {

    const { inputvalue, setInputValue } = useContext(TodoContext);
    const [selectedDate ,setSelectedDate] = useState("");
    const dateInputRef =   useRef(null);

    const {handleAddTodo} = useContext(TodoContext);
    const [textAreaValue, setTextAreaValue] = useState("");
    
    const handleCalendarClick = () => {
        dateInputRef.current.focus();
    }
    const onSubmitTodo = (event) => {
        event.preventDefault();
        const newTodo = {
            text: textAreaValue,
            completed: false
        };
        handleAddTodo({newTodo});
    }

    const onChangeTextAreaValue = ({target}) => {
        setTextAreaValue(target.value);
    }

    return (
        <div className="pb-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-row align-items-center">
                        <input
                            placeholder="Seguir a ferma.dev 🐸"
                            className="form-control form-control-lg me-4"
                            id="exampleFormControlInput1"
                            value={inputvalue}
                            onChange={onChangeTextAreaValue}
                        />
                        <DatePicker label="Basic date picker"/>
                        <a href="#!" data-mdb-toggle="tooltip" title="Set due date" onClick={handleCalendarClick}>
                            <i className="bi bi-calendar-date fs-2 me-3"></i>
                        </a>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={onSubmitTodo}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
