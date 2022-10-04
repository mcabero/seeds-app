import React from 'react'

export const ItemListContainer = ({greeting, mensaje}) => {

    return (  
        <>
            <h1>{greeting}</h1>
            <hr />
            <h2>{mensaje}</h2>
        </>
    )
}
