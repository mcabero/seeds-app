import React, { useState } from 'react';

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([{nombre: "Marcos"}, {nombre: "Roman"}]);

    const mariano = {nombre: "Mariano"};

    const agregarMariano =()=> {
        setUsuarios([...usuarios, mariano]);
    }

    return (
        <div>
            <h1>Usuarios</h1>
            <button onClick={agregarMariano}>Agregar a Mariano</button>
            {usuarios.map((usuarios,indice) => (
                    <h1 key={indice}>{usuarios.nombre}</h1>
            ))}
        </div>
    )
}
