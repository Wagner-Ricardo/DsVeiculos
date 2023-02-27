import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { Link, NavLink } from 'react-router-dom';
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h3>Carros Top</h3>
        </Link>
        <button
  
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dsveiculos-navbar"
          aria-controls="dsveiculos-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse flex-row-reverse" id="dsveiculos-navbar" >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName='active'>Catalogo</NavLink>
            </li>
            <li>
              <NavLink to="link/admin" activeClassName='active'>Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
