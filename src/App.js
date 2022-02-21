import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import Login from './Pages/Login';




function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className='Navbar__Container'>
          <Navbar.Brand>Shop product expiration</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='Link' to="/" >Главная</Link>
            <Link className='Link' to="/login">Войти</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;