import React, {useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const EditarLibro = () => {
    const {id} = useParams();
    const[tituloLibro, setTitulo] = useState('');
    const[autor, setAutor] = useState('');
    const[precio, setPrecio] = useState('');
    const navigate = useNavigate();

    const octenerLibro = useCallback(() =>{
        axios.get(`http://127.0.0.1:8000/api/libros/${id}`)
           .then(Response => {
             const libro = Response.data;
             setTitulo(libro.tituloLibro);
             setAutor(libro.autor);
             setPrecio(libro.precio);
           })
           .catch(error => {
             console.error(error);
           });

    }, [id]);

    useEffect(() => {
        octenerLibro();

    }, [octenerLibro]);

    const EditarLibro = (event) => {
        event.preventDefault();

        const libroEditado = {
            tituloLibro: tituloLibro,
            autor: autor,
            precio: precio
        };

        axios.put(`http://127.0.0.1:8000/api/libros/${id}`, libroEditado)
           .then(Response => {
              navigate('/');
           })
           .catch(error => {
              console.error(error);
           });
    };

    //formularo

    return (
        <div>
            <h2>Editar Libro</h2>
            <form onSubmit={EditarLibro}>
                <div className="form-group">
                    <label>Titulo</label>
                    <input type="text" className="form-control" value={tituloLibro} onChange={e => setTitulo(e.target.value)}/>

                </div>

                <div className="form-group">
                    <label>Autor</label>
                    <input type="text" className="form-control" value={autor} onChange={e => setAutor(e.target.value)}/>

                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input type="number" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)}/>

                </div>
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
        </div>

    );
};

export default EditarLibro;