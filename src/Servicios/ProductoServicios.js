import axios from "axios";


const ProductosServicios = {};

ProductosServicios.listarProductos = () => {
   return axios.get("http://localhost:8080/productos");
}

ProductosServicios.buscarProductos = (criterio) => {
   return axios.get("http://localhost:8080/productos?q="+criterio);
}

ProductosServicios.guardarProducto = (producto) => {
   return axios.post("http://localhost:8080/productos", producto);
}

ProductosServicios.borrarProducto = (id) => {
   return axios.delete("http://localhost:8080/productos"+id);
}

export default ProductosServicios;
