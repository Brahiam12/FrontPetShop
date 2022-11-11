const header = () => {
    return (
        <header className="sticky-top bg-success p-3 mb-3 border-bottom" >
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="$gray-500 bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>
                    <nav className="ImagenHome navbar-dark">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <img src="https://github.com/Brahiam12/Git.Curso/blob/master/logo.png?raw=true" alt="200" width="50" height="50" />
                            </a>
                        </div>
                    </nav>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-1 justify-content-center mb-md-0">

                        <li class="nav-item active">
                            <a class="nav-link" href="/categorias">Categorias </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/productos">Productos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="container nav-link " href="/petServicios" data-bs-toggle="dropdown" aria-expanded="false">PetServicios</a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="/Guarderia">Guarderia</a></li>
                                <li><a className="dropdown-item" href="/">Baño y Peluqueria</a></li>
                                <li><a className="dropdown-item" href="/">Paseador</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-2" role="search">
                        <input type="search" id="busProduc" name="busProduc" className="form-control justify-content-center" placeholder="Buscar..." aria-label="Search" />
                        {/* <button type="button" className="btn btn-primary btn-lg">Buscar</button> */}
                    </form>

                    <div className="perfilUsuario">
                        <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li><a className="dropdown-item" href="/">Compras</a></li>
                            <li><a className="dropdown-item" href="/">Configuración</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/">Salir</a></li>
                        </ul>
                    </div>
                    <button className=" font-13 color_white btn btn_login_register d-none d-sm-block d-xl-block" type="button" id="dropdown_options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 ">Crear cuenta</span>
                        <i className="fa fa-angle-down"></i>
                    </button>
                    <div className="carritoCompras">
                        <button type="button" className="btn btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
            <div class="b-example-divider"></div>
        </header>
        
   
    );
}

export default header;

