export default function CardTrip({ tripProp }) {
    const { destinazione, partenza, rientro, compagnia_aerea, accompagnatore, image } = tripProp;

    return (
        <div className="col">
            <div className="card h-100 shadow-sm booroad-trip-card">
                <img src={image} className="card-img-top booroad-trip-image" alt={destinazione} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-bold mb-3">
                        {destinazione}
                    </h5>
                    <div className="card-text">
                        <div className="row g-2 mb-2">
                            <div className="col-12">
                                <small className="text-muted d-flex align-items-center">
                                    <strong className="me-2">Partenza:</strong> {partenza}
                                </small>
                            </div>
                            <div className="col-12">
                                <small className="text-muted d-flex align-items-center">
                                    <strong className="me-2">Rientro:</strong> {rientro}
                                </small>
                            </div>
                            <div className="col-12">
                                <small className="text-muted d-flex align-items-center">
                                    <strong className="me-2">Compagnia:</strong> {compagnia_aerea}
                                </small>
                            </div>
                            <div className="col-12">
                                <small className="text-muted d-flex align-items-center">
                                    <strong className="me-2">Guida:</strong> {accompagnatore}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto pt-3">
                        <div className="btn btn-outline-primary btn-sm w-100">
                            Vedi Partecipanti
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}