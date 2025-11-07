import { useParams } from "react-router-dom"
import CardCustomerContact from "../components/CardCustomerContact"
import trips from "../data/trips.js"
import { Link } from 'react-router-dom';
import { useSearch } from "../context/SearchContext";


const SingleTrip = () => {
    // Recupero id da URL
    const { id } = useParams();
    // Confrontiamo id dell'array trips con id URL
    const tripId = trips.find((i) => i.id === parseInt(id));
    // Se ID non esiste messaggio di errore
    if (!tripId) {
        return <h1> Viaggio non trovato </h1>
    }

    // destrutturato context per utilizzo array filtrato del search
    const { filteredContacts } = useSearch();
    return (
        <>
            <h1>{tripId.destinazione}</h1>
            {/* <img src= alt="" /> */}
            {/* Map per estrapolare tutti i risultati in base al search */}
            {filteredContacts.map(c => (
                <div key={c.id}>
                    <CardCustomerContact customerProp={c} />
                </div>

            ))}
            {/* Ritorno alla home */}
            <Link to="/">Torna ai Viaggi</Link>
        </>
    )
}

export default SingleTrip