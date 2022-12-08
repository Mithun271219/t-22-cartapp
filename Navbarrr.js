import React from 'react'

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg bg-light ">
    <div className="container-fluid">
    <a className="navbar-brand" href='/'>Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" id='fullscr'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="true">Shop</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Products</a></li>
            <li><hr className="dropdown-divider" ></hr></li>
            <li><a className="dropdown-item" href="/">Sale</a></li>
            <li><a className="dropdown-item" href="/">Offers</a></li>
          </ul>
        </li>
        <li id='rght'>
            <a className='nav-link' href="/">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;