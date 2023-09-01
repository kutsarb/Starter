import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Sidebar.css'; // Import the Sidebar CSS file
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={3}> {/* Use xs={12} for full width on mobile */}
          <Sidebar />
        </Col>
        <Col xs={10} md={8}>
          <h1>Welcome to My React Bootstrap Site</h1>
          <p>This is a simple example of using React with Bootstrap.</p>
          <Button variant="primary">Click Me</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
