import React from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


const Loads = () =>{
    return(
        <div className="row mt-3">

        <div className="col-sm-12">
          <div id="" className="card" >
            <div className="card-body">
              <h1 className='card-title text-center'>These are loads</h1>
              <p className="card-text text-center">This is a simple example of using React with Bootstrap.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button className="btn btn-primary me-md-2" type="button">Button</button>
                <button className="btn btn-primary" type="button">Button</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
}
export default Loads;