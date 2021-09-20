import "../NavBar.css";
import React from "react";
import ReactDOM from "react-dom";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";

function NavBar() {
  return (
    <div className="navbar-holder">
      <nav
        style={{color:"#000C66"}}
        id="navbar-id"
        class="navbar navbar-expand-lg navbar-light  gen-navbar"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            TES
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Sell
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Refurbished
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex navbar-search-holder">
              <input
                class="navbar-search navbar-search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              />
              <button
                id="navbar-btn-search"
                class="btn btn-outline-danger navbar-search-button "
                type="submit"
              >
                <FindInPageIcon />
              </button>
              <button
                id="btn-Search"
                class="btn btn-outline-danger navbar-search-button"
                type="submit"
              >
                <ShoppingCartIcon />
              </button>
              <button
                id="btn-Search"
                class="btn btn-outline-danger navbar-search-button"
                type="submit"
              >
                <FavoriteIcon />
              </button>
              <button
                id="btn-Search"
                class="btn btn-outline-danger navbar-search-button"
                type="submit"
              >
                <AccountCircleIcon />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
