import React from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import Sidebar from './Sidebar'; // Import the Sidebar component
import CustomNavbar from './Navbar'
import './Sidebar.css'; // Import the Sidebar CSS file
import './App.css';

function App() {
  return (
    <div>


      <div class="body row mt-3">

        <div class="col-sm-6">
          <div id="" class="card" >
            <div class="card-body">
              <h1 class='card-title text-center'>Welcome to My React Bootstrap Site</h1>
              <p class="card-text text-center">This is a simple example of using React with Bootstrap.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div id="" class="card" >
            <div class="card-body">
              <h1 class='card-title text-center'>Welcome to My React Bootstrap Site</h1>
              <p class="card-text text-center">This is a simple example of using React with Bootstrap.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="row mt-3">

        <div class="col-sm-12">
          <div id="" class="card" >
            <div class="card-body">
              <h1 class='card-title text-center'>Welcome to My React Bootstrap Site</h1>
              <p class="card-text text-center">This is a simple example of using React with Bootstrap.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                <button class="btn btn-primary me-md-2" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>


  );
}

export default App;
