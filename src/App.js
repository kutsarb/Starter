import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Sidebar.css'; // Import the Sidebar CSS file
import './App.css';

function App() {
  return (
    <div class="container" style={{marginLeft: 'none'}}>
      <div class="row justify-items-center">
            <Sidebar class="col">

            </Sidebar>

        <div id="body" class="col">
          <h1>Welcome to My React Bootstrap Site</h1>
          <p>This is a simple example of using React with Bootstrap.</p>
          <Button variant="primary">Click Me</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
