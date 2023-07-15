import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
      <div className='nav-link me-5 ms-3'><Link to="/">{props.title}</Link></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
        <div className='nav-link'><Link to="/about">{props.aboutUs}</Link></div>
          
        </li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
 
</nav>
  )
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string.isRequired
}


Navbar.defaultProps = {
    title:"Set title here",
    aboutUs:"About Us"
}
