import { createContext, useContext, useState } from "react"
import customerContact from "../data/customerContact";

// Hook context
const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    // Impostiamo stringa vuota per la ricerca
    const [searchCustomer, setSearchCustomer] = useState("");

    // creato filtro per nome  e cognome 
    const filteredContacts = customerContact.filter((c) => {
        // unisce stringa del nome e del cognome e fa includes
        const fullName = (c.name + " " + c.surname).toLowerCase();
        return fullName.includes(searchCustomer)
    })
    return (
        <SearchContext.Provider
            value={{
                // Value da exportare con context
                filteredContacts,
                searchCustomer,
                setSearchCustomer
            }}>
            {children}
        </SearchContext.Provider>
    )
}

// Creato hook da importare nelle pagine per utilizzo context
const useSearch = () => {
    const search = useContext(SearchContext)
    return search
}

export { useSearch, SearchProvider }