import { useEffect, useState } from "react";
import "../css/style.css";
import dataJson from "../../json/a.json";
function Pantalones(){
    const camperas = dataJson.filter((elemento) => elemento.category === "Pantalones");
    const [cantidades, setCantidades] = useState(0);

  const menos = (id) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: Math.max((prevCantidades[id] || 0) - 1, 0),
    }));
  };

  const mas = (id) => {
    setCantidades((prevCantidades) => ({
      ...prevCantidades,
      [id]: (prevCantidades[id] || 0) + 1,
    }));
  };
    return(
      <>
      <div className="row">
        {camperas.map((elemento) => (
          <div key={elemento.id} className="col-xl-3 col-md-6 col-lg-4 col-sm-6   my-4" >
            <div className="card centrado  mx-4" style={{ width: "22rem" }}>
              <img src={elemento.image} className="card-img-top altura " alt={elemento.name} />
              <div className="card-body ">
                
                <h2 className="card-text fs-5  text-center">{elemento.name}</h2>
                <p className=" text-center">{elemento.price}$</p>
                <div className="fs-3 centrado ">
                  <button className="btn btn-success m-0" onClick={() => menos(elemento.id)}>
                    <span>-</span>
                  </button>
                  <span className="mx-2 ">{cantidades[elemento.id] || 0}</span>
                  <button className="btn btn-success" onClick={() => mas(elemento.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      </>  
    )
}
export default Pantalones;