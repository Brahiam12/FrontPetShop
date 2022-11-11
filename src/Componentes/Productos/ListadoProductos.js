import { useState, useEffect } from "react";
import Estados from "../../enums/Estados";
import ProductosServicios from "../../Servicios/ProductoServicios";



const ListadoProductos = () => {

  const [ListadoProductos, setListadoProductos] = useState([]);
  const [estado, setEstado] = useState(Estados.CARGANDO);
  const [ idBorrar, setIdBorrar ] = useState("");
  const [ productoBorrar, setProductoBorrar ] = useState("");
  
  

  
    const cargarProductos = async () => {
      try {
        const respuesta = await ProductosServicios.listarProductos();
        console.log(respuesta.data);
        if (respuesta.data.length > 0) {
          setListadoProductos(respuesta.data);
          setEstado(Estados.OK);
        }
        else {
          setEstado(Estados.VACIO);
        }
      } catch (error) {
        setEstado(Estados.ERROR);
      }
    }
    
    useEffect(() => {
        cargarProductos();
    }, [])
 

  
  const borrarProducto = async () => {
    try {
        await ProductosServicios.borrarProducto(idBorrar);
        cargarProductos();
    } catch (error) {
        
    }
}

const confirmarBorrado = (id, producto) => {
    setIdBorrar(id);
    setProductoBorrar(producto);
}

  return (
    
      <div className="container">
          <h4>Lista de productos<a href="/productos/form" className="btn btn-sm btn-primary ms-3">Añadir producto</a> </h4>
          <div id="tabla">
              <table className="table table-sm">
                  <thead>
                      <tr>
                          <th>Nombre</th>
                          <th>Marca</th>
                          <th>Precio</th>
                          <th>Disponible</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          estado === Estados.ERROR ?
                          (<tr>
                              <td colSpan="5">Ocurrió un error, intente más tarde</td>
                          </tr>) :
                          estado === Estados.CARGANDO ? 
                          (<tr>
                              <td colSpan="5" align="center">
                                  <div className="spinner-border text-secondary" role="status">
                                      <span className="visually-hidden">Loading...</span>
                                  </div>
                              </td>
                          </tr>) :
                          estado === Estados.OK ?
                          ListadoProductos.map((producto)=> (
                                  <tr key={producto._id}>
                                      <td>{producto.nombre}</td>
                                      <td>{producto.marca}</td>
                                      <td>{producto.precio}</td>
                                      <td>{producto.disp ? "Sí" : "No"}</td>
                                      <td>
                                          <a href={"/productos/form/"+producto._id} className="btn btn-sm btn-success me-2">Editar</a>
                                          <button onClick={() => {confirmarBorrado(producto._id, producto.nombre)}} className="btn btn-sm btn-danger">Eliminar</button>
                                          <button onClick={() => {confirmarBorrado(producto._id, producto.nombre)}} className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar">Eliminar</button>
                                              
                                      </td>
                                  </tr>
                              )) :
                              (<tr>
                                  <td colSpan="5">No hay datos</td>
                              </tr>)
                      }
                  </tbody>
              </table>
          </div>
          <div className="modal fade" id="modalBorrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Alerta de eliminación</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">   
                            Desea borrar esta categoria: {productoBorrar}? 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={borrarProducto} type="button" className="btn btn-danger" data-bs-dismiss="modal">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>

  );
};

export default ListadoProductos;