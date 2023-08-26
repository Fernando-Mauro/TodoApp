
export const TodoItem = ({ text, completed, handleDeleteTodos, handleCompletedTodo }) => {

    return (

        <ul className="list-group list-group-horizontal rounded-4s bg-transparent border border-secondary px-4 my-3">
            <li
                className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <div className="form-check">
                    <input className="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
                        aria-label="..." checked={completed}
                        onChange={handleCompletedTodo}
                    />
                </div>
            </li>
            <li
                className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p className={`lead fw-normal mb-0 ${completed && 'text-decoration-line-through'}`}>{text}</p>
            </li>
            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div className="d-flex flex-row justify-content-end mb-1">
                    <a onClick={handleDeleteTodos} href="#!" className="text-danger" data-mdb-toggle="tooltip" title="Delete todo">
                        <i className="bi bi-trash fs-2"></i>
                    </a>
                </div>
                <div className="text-end text-muted">
                    <span href="#!" className="text-muted link-underline-opacity-0" role="button" data-mdb-toggle="tooltip" title="Created date">
                        <p className="small mb-0">
                            <i className="bi bi-info-circle me-2"></i>
                            28th Jun 2020
                        </p>
                    </span>
                </div>
            </li>
        </ul>
    )
}
