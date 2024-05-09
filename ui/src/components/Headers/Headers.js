import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaUtensils } from 'react-icons/fa';
import './header.css';

const Headers = () => {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <NavLink to="/" className="nav-link home-link">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
            alt="logo"
            className="header-logo-image"
          />
          FIND DUBAI
        </NavLink>

        <Nav className="justify " >

          <NavLink to="/mainpage" className="nav-link restaurants-link" style={{ color: 'white' }}>
            HOME
          </NavLink>
          <NavLink to="/" className="nav-link restaurants-link" style={{ color: 'white' }}>
            ABOUT
          </NavLink>
          <NavLink to="/" className="nav-link restaurants-link" style={{ color: 'white' }}>
            CONTACT 
          </NavLink>
          <NavLink to="/" className="nav-link restaurants-link" style={{ color: 'white' }}>
            LOGIN
          </NavLink>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default Headers;


