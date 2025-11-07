import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function SearchBar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                {/* <Navbar.Collapse id="navbarScroll"> */}
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

export default SearchBar;