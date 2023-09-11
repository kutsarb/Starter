import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import { Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav2 from './pages/nav2';
import Dash from './pages/Dash';
import Loads from './pages/Loads';


function App() {
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dash />} />
                <Route index element={<Dash />} />
                <Route path="/Loads" element={<Loads />} />
            </Routes>
        </BrowserRouter>


    );
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav2 />, document.getElementById('navB'));
