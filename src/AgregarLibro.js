import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AgregarLibro = () => {
    const [tituloLibro, setTituloLibro] = useState('');
    const [autor, setAutor] = useState('');
    const [precio, setPrecio] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const nuevoLibro ={
            tituloLibro: tituloLibro,
            autor: autor,
            precio: precio
        };
        axios.post('http://127.0.0.1:8000/api/libros', nuevoLibro)
         .then(response => {
            console.log(response.data);
            navigate('/');
         })
         .catch(error => {
            console.error(error);
         });

        setTituloLibro('');
        setAutor('');
        setPrecio('');
    };

    return (
        <div className="container">
            <h2>Agregar Libro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="titulo"
                      placeholder="Titulo"
                      value={tituloLibro}
                      onChange={(e) => setTituloLibro(e.target.value)}
                    
                    />

                </div>

                <div className="form-group">
                    <label htmlFor="autor">Autor</label>
                    <input
                      type="text"
                      className="form-control"
                      id="autor"
                      placeholder="Autor"
                      value={autor}
                      onChange={(e) => setAutor(e.target.value)}
                    
                    />

                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input
                      type="text"
                      className="form-control"
                      id="precio"
                      placeholder="Precio"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                    
                    />

                </div>

                <button type="submit" className="btn btn-primary">Agregar Libro</button>

                

            </form>
        </div>
    );
};

export default AgregarLibro;