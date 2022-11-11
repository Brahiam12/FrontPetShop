const Login = () => {
    return (
        <body>
            <div className="bg-success p-2 text-dark bg-opacity-25">
                <div className="container my-4">
                    <div className="card mb-4 box-shadow h-md-250">
                        <div className="row">
                            <h2 className="fw-bold text-center pt-5 mb-5 ">Bienvenido</h2>
                            <img className="col-md-4 offset-md-1 mb-3 mb-lg-0" src="https://www.diariolibre.com/binrepository/851x1024/0c0/0d0/none/10904/UPRN/perro-labrador_14531788_20200809181008.jpg" width={150} height={280} alt="" />
                            <form className="col-md-4 offset-md-2 mb-3 mb-lg-0" action="/" >
                                <div className="container mb-4 ">
                                    <label for="email" className="form-label">Correo electronico</label>
                                    <input type="email" className="form-control"></input>
                                </div>
                                <div className="container mb-4">
                                    <label for="contraseña" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" name="password"></input>
                                    <span>
                                        <a href="/">  ¿Olvido su contraseña?</a>
                                    </span>
                                </div>

                                <div className="container d-grid">
                                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                </div>
                                <div className="container my-3">
                                    <span>¿No tienes cuenta?
                                        <a href="/">   Regístrate   </a>
                                    </span>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer classNameName="">
            <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                </div>
               
            </footer>
        </body>

    );
}
export default Login;