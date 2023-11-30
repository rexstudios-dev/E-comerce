import Carrusel from "./components/Carrusel/Carrusel.jsx"
import Producto from "./components/Productos/Productos.jsx"
 import Header from "./components/Header/Header.jsx"
import Camperas from "./components/Camperas/Camperas.jsx"
import { Routes, Route } from "react-router-dom"
import Remeras from "./components/Remeras/Remeras.jsx"
import Zapatillas from "./components/Zapatillas/Zapatilas.jsx"
import Pantalones from "./components/Pantalones/Pantalones.jsx"
import Gorras from "./components/Gorras/Gorras.jsx"


function App() {
  

  return (
    
    <div>
      <div className="row">
     <Header/>
     </div>
     <div className="row justify-content-center">
   <div className="col-xl-5 col-lg-8 col-md-10 col-sm-12">
  <Carrusel/>
  </div>
  </div>
  <div className="row Row-productos">
    <Routes>
      <Route path="/" element={<Producto></Producto>}> 
      </Route>
      <Route path="Camperas" element={<Camperas></Camperas>}>
        </Route>
        <Route path="Remeras" element={<Remeras></Remeras>}>
        </Route>
        <Route path="Zapatillas" element={<Zapatillas></Zapatillas>}>
        </Route>
        <Route path="Pantalones" element={<Pantalones></Pantalones>}>
        </Route>
        <Route path="Gorras" element={<Gorras></Gorras>}>
        </Route>
    </Routes>
 
  </div>
  
     
    </div>
  )
}

export default App
