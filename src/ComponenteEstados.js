import React, { useState, useEffect } from 'react';

export const ComponenteEstados = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(1);
    const [numero, setNumero] = useState(0);

    useEffect(()=>{
        setNumero(numero + 1);
        return(()=>{
            //clearInterval(intervalo);
        })
    },[]);

    const handlerClickSumar = () =>{
        setContador(contador + 1);
    }
    const handlerClickRestar = () =>{
        setContador(contador - 1);
    }
    const handlerClickReset = () =>{
        setContador(1);
    }

    return (
        <div>
            <h1>Componente para los Estados</h1>
            <h1>{contador}</h1>
            <h1>{numero}</h1>
            <button onClick={handlerClickSumar}>Sumar</button>
            <button onClick={handlerClickRestar}>Restar</button>
            <button onClick={handlerClickReset}>Reset</button>
        </div>
    );
};