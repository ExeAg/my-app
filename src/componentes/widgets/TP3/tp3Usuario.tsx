import React from "react";

const Usuario = ({nombre,edad,telefono,domicilio}:{nombre:string,edad:string,telefono:string,domicilio:string}) => {

    return(
        <div>
            <h2> ej 3.2</h2>
            <h2>Usuario: {nombre}</h2>
            <h2>edad: {edad}</h2>
            <h2>telefono: {telefono}</h2>
            <h2>domicilio : {domicilio}</h2>
        </div>
    )
}


export default Usuario;