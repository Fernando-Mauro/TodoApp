import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const TodoTitle = () => {
    return (
        <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
            <i className="bi bi-check-square-fill me-3"></i>
            <u>My Todo-s</u>
        </p>
    )
}