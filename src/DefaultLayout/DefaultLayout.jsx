import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useSearch } from "../context/SearchContext";
import SearchBar from "../components/SearchBar";


const DefaultLayout = () => {
    // Impostato hook location per impostare search solo su SingleTrip
    const location = useLocation();
    // Scelton path che inizia con "" dove compare la SearchBar
    const showSearchBar = location.pathname.startsWith("/trip");
    // Importato hook del context
    const { searchCustomer, setSearchCustomer } = useSearch();
    return (
        <>
            <header>
                <Navbar />
                {/* Utilizzo hook location & context  */}
                {showSearchBar && (<SearchBar searchCustomer={searchCustomer} setSearchCustomer={setSearchCustomer} />)}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout