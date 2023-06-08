import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import imgLogo from '../../images/deco-MDC-Comics/logo-MDC-Comics.png';
import imgLogin from '../../images/deco-MDC-Comics/icon identification blanc.png';
import jwt_decode from "jwt-decode";

const Header = () => {

  const token = localStorage.getItem("jwt");
  let username = null;

  if (token) {
    const tokenDecoded = jwt_decode(token);
    username = tokenDecoded.data.username;
    
  }

  return (
    <header>
      <div className="title fixed-top">
        <div className="logo-header-user">
          <Link to="/">
            <img src={imgLogo} alt="LogoMdcComics" />
          </Link>
          <h1>"Le meilleur de l'univers DC Comics et Marvel reunis"</h1>
        </div>
        <div className="NavBar w-100">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Menu Header */}
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="BTNheader nav-item">
                    <Link to="/" className="nav-link" href="#Actus">
                      Actualites
                    </Link>
                  </li>
                  <li className="DCheader nav-item">
                    <Link to="/" className="nav-link" href="#DC">
                      DC Comics
                    </Link>
                  </li>
                  <li className="MARVELheader nav-item">
                    <Link to="/" className="nav-link" href="BtnMarvel">
                      Marvel
                    </Link>
                  </li>
                  <li className="BTNheader nav-item">
                    <Link to="/" className="nav-link" href="#">
                      Bons Plans
                    </Link>
                  </li>
                </ul>
              </div>
              <li className="BTNheader login">
                <Link to="/admin/login" >
                  {username ? <p className="btn-login">{username}</p> : <p className="btn-login">Connexion</p>}
                </Link>
                <img src={imgLogin} alt="Mon Compte" />
              </li>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
