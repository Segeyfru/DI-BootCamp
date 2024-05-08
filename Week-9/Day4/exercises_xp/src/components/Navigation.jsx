import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/"  exact="true">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile" >Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" >Shop</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;