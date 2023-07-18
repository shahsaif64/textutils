import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../components/ms-icon.png';

export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    
    <Link className="navbar-brand" style={{color: props.mode==='info'?'black':'white'}} to="/"><img style={{backgroundColor: props.mode==='info'?'':'white',height:'20px',width:'20px',marginBottom:'10px'}} src={logo} alt="T" />extUtils</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" style={{color: props.mode==='info'?'black':'white'}} aria-current="page" to="/About">About</Link>
        </li>
       
   
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.modeChange} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Mode</label>
</div>
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
