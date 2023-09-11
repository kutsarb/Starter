import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Nav2 = () => {
  return (
    <>
      {[false].map((expand) => (

        <Navbar key={expand} expand={expand} className="bg-dark mb-3  border" data-bs-theme="dark">
          <Container fluid className='navCont'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="bg-dark mb-3" data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>

              </Offcanvas.Header>
              <Tab.Container id="left-tabs-example">
                <Offcanvas.Body >

                  <Nav variant="pills" className="flex-column">




                    <Nav.Link eventKey='' href='/'>Home</Nav.Link>

                    <NavDropdown
                      title="Loads"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item className='second' eventKey="/Loads" href="/Loads">Loads Dashboard</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className='third' eventKey="/openLoads" href="/openLoads">Open</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className='fourth' href="/dispatchedLoads">Dispatched</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item className='fifth' href="/deliveredLoads">Delivered</NavDropdown.Item>

                    </NavDropdown>








                    <NavDropdown
                      title="Dispatch"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/dispatchedLoads">Available Drivers</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/deliveredLoads">Dispatched</NavDropdown.Item>

                    </NavDropdown>






                    <Nav.Link href="#3">Drivers</Nav.Link>





                    <NavDropdown
                      title="Accounting"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      href="/Loads"
                    >
                      <NavDropdown.Item href="/dispatchedLoads">To Dispatch</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/deliveredLoads">Dispatched</NavDropdown.Item>

                    </NavDropdown>

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
              </Tab.Container>
            </Navbar.Offcanvas>

            <Navbar.Brand className='nItem ' href="/">
              <Container>

                <Row>

                  <Col>
                    <h3 placement="start">TrackD & TruckD </h3>
                  </Col>

                  <Col>
                    <Image className=" pl-5" placement="end" src="http://www.w3.org/2000/svg" rounded />
                  </Col>

                </Row>

              </Container>
            </Navbar.Brand>




          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nav2;