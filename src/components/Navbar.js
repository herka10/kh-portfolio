const Navbar = ({ setView, view }) => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Kao Nou</a> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                onClick={() => setView('home')}
                className={`nav-link ${view === 'home' ? 'active fw-bold' : ''}`}
                href="#"
              >
                <i className="bi bi-search-heart"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                onClick={() => setView('contact')}
                className={`nav-link ${view === 'contact' ? 'active fw-bold' : ''}`}
                href="#"
              >
                <i className="bi bi-bookmark-heart"></i>Contact
              </a>
            </li>
          </ul>
      </div>
    </nav>
    )
  }
  
  export default Navbar