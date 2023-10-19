import React from 'react';
import propTypes from "prop-types";

export default function header(props) {
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className='container-fluid'> 
      <a className="navbar-brand" href='#df' >ToDoList</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#sd">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#dsfsd">About</a>
          </li>
       
        </ul>
        
        { props.search ?< form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form > : 'Bola hai na dikhao!'}
        
      </div>
      </div>
    </nav>
    )
    
}

header.defaultProps= {
    title : "Your title here",
    search : true
}

header.propTypes = {
    search : propTypes.bool.isRequired
}
 