const clientes =[
    {
        nombres:"Fernando Serrano",
        direccion:"Calle con carrera",
        documento :109882,
        contrasena: "brahiam109",
        correo:"brahiamf1299@gmail.com",
        telefono :31881782,

    },{

        nombres:"Leydi Garzon",
        direccion:"Calle con diagonal",
        documento :32424,
        contrasena: "tati1231",
        correo:"correo@gmail.com",
        telefono :31881234,
        
    }
]

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return clientes;
}

export default ClientesServicios;