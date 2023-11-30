import { useEffect, useState } from "react";
import "../css/style.css";
import { Outlet, Link } from "react-router-dom";

function Header() {

  
  return (
    <div>
      <nav className="navbar bg-azul">
        <div className="container-fluid ">
          
          <Link to="/" className=" mb-0 h py-3 fs-2 blanco sin-link">E-commerce</Link>
          <div className="derecha">
            {/* modal  bars*/}
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
            >
              <i className="fa-solid fa-bars fa-2xl px-4 blanco fs-1"></i>
            </button>

            <div
              className="offcanvas offcanvas-start bg-azul "
              tabIndex="-1"
              id="offcanvasMenu"
              aria-labelledby="offcanvasMenuLabel"
            >
              <div className="offcanvas-header ">
                <h5 className="offcanvas-title fs-2 blanco" id="offcanvasMenuLabel">
                  E-commerce
                </h5>
                <button
                  type="button"
                  className=" btn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i
                    className="fa-regular fa-circle-xmark fa-2xl fa-beat"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
              </div>
              <div className="offcanvas-body ">
                <Link className="dropdown-item fs-5 blanco my-3 w-50" to="Camperas">Camperas</Link>  
                <Link className="dropdown-item fs-5 blanco my-3 w-50" to="Remeras">Remeras</Link>
                <Link className="dropdown-item fs-5 blanco my-3 w-50" to="Zapatillas">Zapatillas</Link>
                <Link className="dropdown-item fs-5 blanco my-3 w-50" to="Pantalones">Pantalones</Link>
                <Link className="dropdown-item fs-5 blanco my-3 w-50" to="Gorras">Gorras</Link>
                <Link className="dropdown-item fs-5 blanco my-3 w-50" to="/">Todos los productos</Link>
               
              </div>
            </div>

            {/* fin modal */}

            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
            >
              <i className="fa-solid fa-cart-shopping fa-2xl px-4 blanco fs-2"></i>
            </button>

            <div
              className="offcanvas offcanvas-end bg-azul "
              tabIndex="-1"
              id="offcanvasCart"
              aria-labelledby="offcanvasCartLabel"
            >
              <div className="offcanvas-header ">
                <h5 className="offcanvas-title fs-2 blanco" id="offcanvasCartLabel">
                  Carrito
                </h5>
                <button
                  type="button"
                  className=" btn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i
                    className="fa-regular fa-circle-xmark fa-2xl fa-beat"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
              </div>
              <div className="offcanvas-body ">
                
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Header;
