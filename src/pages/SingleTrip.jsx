import { useParams } from "react-router-dom"
import CardCustomerContact from "../components/CardCustomerContact"
import { Link } from 'react-router-dom';
import { useSearch } from "../context/SearchContext";
import { useTravel } from "../context/TravelContext";


const SingleTrip = () => {
    // Recupero id da URL
    const { id } = useParams();
    // destrutturato context per utilizzo array filtrato del search
    const { filteredContacts } = useSearch();
    // Recupero i viaggi dal context
    const { travels } = useTravel();

    // Confrontiamo id dell'array travels con id URL
    const tripId = travels.find((i) => i.id === parseInt(id));
    // Se ID non esiste messaggio di errore
    if (!tripId) {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="alert alert-danger" role="alert">
                            <h1 className="display-1">❌</h1>
                            <h2>Viaggio non trovato</h2>
                            <p className="mb-4">Il viaggio che stai cercando non esiste.</p>
                            <Link to="/" className="btn btn-primary btn-lg">
                                <i className="bi bi-arrow-left me-2"></i>
                                Torna ai Viaggi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-4">
            {/* Header del viaggio */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-8">
                    <div className="card bg-primary text-white shadow-lg">
                        <div className="card-body text-center py-5">
                            <h1 className="display-4 fw-bold mb-3">
                                {tripId.destinazione}
                            </h1>
                            <p className="lead mb-0">
                                Dettagli del viaggio e lista partecipanti
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h2 className="h3 text-primary mb-0">
                            Partecipanti al Viaggio
                        </h2>
                        <span className="badge bg-primary rounded-pill fs-6">
                            {filteredContacts.length} partecipanti
                        </span>
                    </div>

                    {filteredContacts.length > 0 ? (
                        <div className="accordion accordion-flush" id="participantsAccordion">
                            {filteredContacts.map(c => (
                                <div key={c.id} className="mb-3">
                                    <CardCustomerContact customerProp={c} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="alert alert-info text-center" role="alert">
                            <i className="bi bi-info-circle me-2"></i>
                            Nessun partecipante trovato per questo viaggio.
                        </div>
                    )}

                    <div className="text-center mt-5">
                        <Link to="/" className="btn btn-outline-primary btn-lg">
                            Torna ai Viaggi
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTrip