import { Link } from "react-router-dom";
// import '../styles/navbar.css';

const Navigation = ({ children }) => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              IPSSI
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-link">
                  Pokedex
                </Link>
                <Link to="/meteo" class="nav-link">
                  Météo
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {children}
    </>
  );
};
export default Navigation;
