import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Nav2 = () => {
  return (
    <>
    {[false].map((expand) => (
      <Navbar key={expand} expand={expand} variant="dark" className="bg-dark mb-3" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand className='nItem' href="/">TrackD & TruckD</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-dark mb-3 " data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                
                <Nav.Link href='/'>Home</Nav.Link>

                
                <NavDropdown
                    title="Loads"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    
                  >
                <NavDropdown.Item  href="/openLoads">Open</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href="/dispatchedLoads">Dispatched</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  href="/deliveredLoads">Delivered</NavDropdown.Item>
                
                </NavDropdown>


                <Nav.Link href="#2">Services</Nav.Link>

                <Nav.Link href="#3">Contact</Nav.Link>


                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        ))}
        </>
    );
    }

export default Nav2;