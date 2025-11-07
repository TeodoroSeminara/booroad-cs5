import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function SearchBar({ searchCustomer, setSearchCustomer }) {
    // Funzione per ricerca customer
    const handleSearch = (event) => {
        setSearchCustomer(event.target.value.toLowerCase());
    };

    return (
        <Navbar expand="lg">
            <Container fluid>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        // Value che viene preso dalla funzione per filtrare
                        value={searchCustomer}
                        // filtro in base a quello che viene scritto 
                        onChange={handleSearch}
                    />
                    {/* <Button variant="outline-primary">Search</Button> */}
                </Form>
            </Container>
        </Navbar>
    );
}

export default SearchBar;