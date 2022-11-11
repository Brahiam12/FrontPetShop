import Login from "./Componentes/General/Login";
import Header from "./Componentes/General/Header";
import Banner from "./Componentes/General/Banner";
import ListadoProductos from "./Componentes/Productos/ListadoProductos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Bienvenida from "./Componentes/General/Bienvenida";
import Guarderia from "./Componentes/Productos/Guarderia";
import ListaFormCategorias from "./Componentes/categorias/ListadoCategorias";
import FormProducto from "./Componentes/Productos/FormProductos";
import FormEdicionCategoria from "./Componentes/categorias/EdicionCategoria";

function App() {
  return (
       <div>
        <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner/>} exact></Route>
          <Route path="/productos" element={<ListadoProductos/>} exact></Route>
          <Route path="/login" element={<Login/>} exact></Route>
          <Route path="/Guarderia" element={<Guarderia />} exact></Route>
          <Route path="/categorias" element={<ListaFormCategorias/>} exact></Route>
          <Route path="/categorias/form/:id" element={<FormEdicionCategoria/>} exact></Route>
          <Route path="/productos/form" element={<FormProducto/>} exact></Route>
          <Route path="/productos/form/:id" element={<FormProducto/>} exact></Route>
        </Routes>
      </BrowserRouter>
   </div>
    
  );
}

export default App;
