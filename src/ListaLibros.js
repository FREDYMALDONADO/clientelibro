import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListaLibros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(()=> {
        axios.get('http://127.0.0.1:8000/api/libros')
        .then(response => {
            setLibros(response.data);
        })
        .catch(error =>{
            console.error(error);
        });
    }, []);

    const handleEliminarLibro = (id) =>{
        axios.delete(`http://127.0.0.1:8000/api/libros/${id}`)
          .then(Response => {
            setLibros(libros.filter(libro => libro.id !== id ));
          })
          .catch(error => {
            console.error(error);
          });
    };

    return (
        <div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Título</th>
                        <th scope='col'>Autor</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => (

                    <tr key={libro.id}>
                        <th scope='row'>{libro.id}</th>
                        <td>{libro.tituloLibro}</td>
                        <td>{libro.autor}</td>
                        <td>{libro.precio}</td>
                        <td>
                            {/*Botones de editar y eliminar*/}
                            <Link to={`/editar/${libro.id}`} className="btn btn-primary mr-2">Editar</Link>
                            <button onClick={() => handleEliminarLibro(libro.id)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaLibros;