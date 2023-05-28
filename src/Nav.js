import React from "react";

const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand"href="/">Inicio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-brand" href="/agregar">Agregar Libro</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;