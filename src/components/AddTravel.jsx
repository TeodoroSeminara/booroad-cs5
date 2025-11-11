
export default function AddTravel() {

    return (
        <div className="col">
            <div className="card h-100 shadow-sm booroad-trip-card">
                {/* <!-- Pulsante icona: incolla in HTML --> */}
                <i className="fa-solid fa-plane-departure plane-icon" ></i>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-bold mb-3">
                    </h5>
                    <div className="card-text">
                        <div className="row g-2 mb-2">
                        </div>
                        <div className="mt-auto pt-3">
                            <div className="btn btn-outline-primary btn-sm w-100">
                                Aggiungi viaggio
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}