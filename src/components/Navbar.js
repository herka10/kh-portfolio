const Navbar = ({ setView, view }) => {
    return (
      <nav className="navbar navbar-expand-lg text-white bg-light">
      <div className="container">
        <a className="navbar-brand">Kao Nou</a> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                onClick={() => setView('about')}
                className={`nav-link ${view === 'about' ? 'active fw-bold' : ''}`}
                href="#">
                  About
              </a>
            </li>
            <li className="nav-item">
              <a 
                onClick={() => setView('portfolio')}
                className={`nav-link ${view === 'portfolio' ? 'active fw-bold' : ''}`}
                href="#"
              >Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a 
                onClick={() => setView('resume')}
                className={`nav-link ${view === 'resume' ? 'active fw-bold' : ''}`}
                href="#"
              >Resume
              </a>
            </li>
            <li className="nav-item">
              <a 
                onClick={() => setView('contact')}
                className={`nav-link ${view === 'contact' ? 'active fw-bold' : ''}`}
                href="#"
              >Contact
              </a>
            </li>
          </ul>
      </div>
    </nav>
    )
  }
  
  export default Navbar