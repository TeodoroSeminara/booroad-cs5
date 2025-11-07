import { Link } from "react-router-dom"
const NotFoundPage = () => {
    return (
        <div>
            <img src="../../../public/img/error404.png" alt="" />
            <Link to="/">Torna ai viaggi</Link>
        </div>
    )
}

export default NotFoundPage