
export const StatusFilteredTodo = () => {
    return (
        <select className="form-select w-25">
            <option opened="true">All</option>
            <option value="2">Completed</option>
            <option value="3">Active</option>
            <option value="4">Has due date</option>
        </select>
    )
}
