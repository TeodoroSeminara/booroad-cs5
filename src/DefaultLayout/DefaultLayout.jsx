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
        <div className="d-flex flex-column min-vh-100">
            <header>
                <Navbar />
                {showSearchBar && (
                    <SearchBar
                        searchCustomer={searchCustomer}
                        setSearchCustomer={setSearchCustomer}
                    />
                )}
            </header>
            <main className="flex-grow-1 bg-light">
                <Outlet />
            </main>
            <footer className="bg-dark text-light py-4 mt-auto">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <p className="mb-0">
                                <strong>© 2025 Booroad</strong> - Gestione Viaggi
                            </p>
                            <small className="text-muted">
                                Powered by React & Bootstrap 5
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default DefaultLayout