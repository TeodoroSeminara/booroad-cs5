import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        src="/img/logo.png"
                        alt="logo_booroad"
                        className="booroad-logo"
                        height="50"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <i className="bi bi-house-door me-1"></i>
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar