import React from 'react';
import '../style/Testimonio.css';


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
        <img 
           className='imagen-testimonio'
           src={require(`../imagenes/${props.imagen}`)}
           alt= 'Foto de Ruby<3'/>
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{props.nombre}</strong> <strong>{props.apellido}</strong></p>
            <p className='cargo-testimonio'>{props.sobrenombre}</p>
            <p className='cargo-testimonio'>{props.arma}</p>
            <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  );
}

export default Testimonio;