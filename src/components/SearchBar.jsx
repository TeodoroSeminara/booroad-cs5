function SearchBar({ searchCustomer, setSearchCustomer }) {
    // Funzione per ricerca customer
    const handleSearch = (event) => {
        setSearchCustomer(event.target.value.toLowerCase());
    };

    return (
        <div className="bg-light border-top py-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center mb-3">
                            <h5 className="text-primary mb-2">
                                Cerca Partecipanti
                            </h5>
                            <p className="text-muted small mb-0">
                                Filtra i partecipanti per nome, cognome o codice fiscale
                            </p>
                        </div>
                        <div className="input-group input-group-lg">
                            <span className="input-group-text bg-primary text-white border-0">
                            </span>
                            <input
                                type="search"
                                className="form-control border-0 shadow-sm"
                                placeholder="Inserisci nome, cognome o codice fiscale..."
                                aria-label="Cerca partecipanti"
                                value={searchCustomer}
                                onChange={handleSearch}
                            />
                            {/* Btn X per searchbar */}
                            {/* {searchCustomer && (
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setSearchCustomer('')}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;