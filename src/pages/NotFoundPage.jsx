import { Link } from "react-router-dom"
const NotFoundPage = () => {
    return (
        <div>
            {/* Messaggio di errore per rotte non trovate */}
            <img src="../../../public/img/error404.png" alt="" />
            <Link to="/">Torna ai viaggi</Link>
        </div>
    )
}

export default NotFoundPage