import { useEffect, useState } from "react";
import "../css/style.css";

function Carrusel(){
return(
  <div>
     <div id="carouselExampleControls" className="carousel slide w-100 centro altura-carrusel bordes" data-bs-ride="carousel">
  <div className="carousel-inner altura-carrusel">
    <div className="carousel-item active">
      <img src="https://static.vecteezy.com/system/resources/previews/000/264/804/original/shiny-black-friday-sale-banner-design-vector.jpg" className="d-block w-100 altura-carrusel" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/previews/000/672/757/original/black-friday-sale-banner-vector.jpg" className="d-block w-100 altura-carrusel" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://static.vecteezy.com/system/resources/previews/000/677/961/original/black-friday-special-offer-banner-layout-design.jpg" className="d-block w-100 altura-carrusel" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
</div>
)
};
export default Carrusel;