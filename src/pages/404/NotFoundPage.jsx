import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigateTo = useNavigate();

    return (
        <div>
            <h1>404 - Pagina no encontrada</h1>
            <button onClick={navigateTo('/')}>Volver a Home</button>
        </div>
    )
}

export default NotFoundPage;