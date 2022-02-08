import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

  const state = useSelector((state) => state.productReducers)

  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <NavLink to="/" className="navbar-brand fw-bold fs-4 ms-3 ">LA COLLECTION</NavLink>
            <button className="navbar-toggler"
                   type="button"
                   data-toggle="collapse" 
                   data-target="#navbarSupportedContent" 
                   aria-controls="navbarSupportedContent" 
                   aria-expanded="false" 
                   aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
           </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mx-auto">
          <li className="nav-item"><NavLink to="/" className="nav-link" area-current='page'>home</NavLink></li>
          <li className="nav-item"><NavLink to="/products" className="nav-link">products</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link">about</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link">contact</NavLink></li>
      </ul>
      <div className="buttons me-4">
          <SignUp />
          <Login />
         <NavLink to='/cart' className="btn btn-outline-dark ms-2">
             <i className="fa fa-shopping-cart me-1"> Cart ({state.length})</i>
         </NavLink>
      </div>
    </div>
  </nav>
</div>);
};

export default Navbar;
