import { useParams } from "react-router-dom"
import CardCustomerContact from "../components/CardCustomerContact"
import trips from "../data/trips.js"
import customerContact from "../data/customerContact.js"
import { Link } from 'react-router-dom';
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

const SingleTrip = () => {
    const { id } = useParams();
    const tripId = trips.find((i) => i.id === parseInt(id));
    if (!tripId) {
        return <h1> Viaggio non trovato </h1>
    }

    const [searchCustomer, setSearchCustomer] = useState("");

    const filteredContacts = customerContact.filter((c) => {
        const fullName = (c.name + " " + c.surname).toLowerCase();
        return fullName.includes(searchCustomer)
    })
    return (
        <>
            <h1>{tripId.destinazione}</h1>
            {/* <img src= alt="" /> */}
            {/* Search bar riceve stato e setter */}
            <SearchBar searchCustomer={searchCustomer} setSearchCustomer={setSearchCustomer} />

            {filteredContacts.map(c => (
                <div key={c.id}>
                    <CardCustomerContact customerProp={c} />
                </div>

            ))}
            <Link to="/">Torna ai Viaggi</Link>
        </>
    )
}

export default SingleTrip