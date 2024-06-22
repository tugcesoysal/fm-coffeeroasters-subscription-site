import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="layout">
      <header>
        <img
          className="logo"
          alt="brand logo"
          src="/assets/shared/desktop/logo.svg"
        />
        <div className="mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <img
              className="icon-menu "
              alt="menu icon"
              src="/assets/shared/mobile/icon-close.svg"
            />
          ) : (
            <img
              className="icon-menu"
              alt="menu icon"
              src="/assets/shared/mobile/icon-hamburger.svg"
            />
          )}
        </div>

        <nav className="desktop">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">about us</Link>
            </li>
            <li>
              {" "}
              <Link to="/subscribe">create your plan</Link>
            </li>
          </ul>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/about">about us</Link>
              </li>
              <li>
                {" "}
                <Link to="/subscribe">create your plan</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <Outlet />
      <footer>
        <img
          className="logo"
          alt="brand logo"
          src="/assets/shared/desktop/logo-footer.svg"
        />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">about us</Link>
            </li>
            <li>
              {" "}
              <Link to="/subscribe">create your plan</Link>
            </li>
          </ul>
        </nav>
        <ul className="social-list">
          <li>
            <a href="facebook.com">
              <img
                src="/assets/shared/desktop/icon-facebook.svg"
                className="icon-social"
                alt="facebook icon"
              />
            </a>
          </li>
          <li>
            <a href="twitter.com">
              <img
                src="/assets/shared/desktop/icon-twitter.svg"
                className="icon-social"
                alt="twitter icon"
              />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img
                src="/assets/shared/desktop/icon-instagram.svg"
                className="icon-social"
                alt="instagram icon"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
