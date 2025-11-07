import { useParams } from "react-router-dom"
import CardCustomerContact from "../components/CardCustomerContact"
import trips from "../data/trips.js"
import customerContact from "../data/customerContact.js"
import { Link } from 'react-router-dom';
import guide from "../data/guide.js"

const SingleTrip = () => {
    const { id } = useParams();
    const tripId = trips.find((i) => i.id === parseInt(id));
    if (!tripId) {
        return <h1> Viaggio non trovato </h1>
    }

    return (
        <>
            <h1>{tripId.destinazione}</h1>
            {/* <img src= alt="" /> */}
            {customerContact.map(c => (
                <div key={id}>
                    <CardCustomerContact customerProp={c} />
                </div>

            ))}
            <Link to="/">Torna ai Viaggi</Link>
        </>
    )
}

export default SingleTrip