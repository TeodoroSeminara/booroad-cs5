import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                    <div className="card shadow-lg border-0">
                        <div className="card-body py-5">
                            <div className="display-1 text-danger mb-4">🚫</div>
                            <h1 className="display-4 fw-bold text-primary mb-3">404</h1>
                            <h2 className="h4 text-dark mb-3">Pagina Non Trovata</h2>
                            <p className="text-muted mb-4">
                                Oops! La pagina che stai cercando non esiste o è stata spostata.
                            </p>

                            <div className="mb-4">
                                <img
                                    src="/img/error404.png"
                                    alt="Errore 404"
                                    className="img-fluid rounded"
                                    style={{ maxHeight: '200px' }}
                                    onError={(e) => { e.target.style.display = 'none' }}
                                />
                            </div>

                            <Link to="/" className="btn btn-primary btn-lg px-4">
                                <i className="bi bi-house-door me-2"></i>
                                Torna alla Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage