import { useParams } from "react-router-dom"
import CardCustomerContact from "../components/CardCustomerContact"
import trips from "../data/trips.js"
import customerContact from "../data/customerContact.js"

const SingleTrip = () => {
    const { id } = useParams();
    const tripId = trips.find((i) => i.id === parseInt(id));
    if (!tripId) {
        return <h1> Viaggio non trovato </h1>
    }

    return (
        <>
            <h1>{tripId.destinazione}</h1>
            {customerContact.map(c => (
                <div key={id}>
                    <CardCustomerContact customerProp={c} />
                </div>
            ))}
        </>
    )
}

export default SingleTrip