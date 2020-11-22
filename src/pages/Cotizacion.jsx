import React from 'react'

function Cotizacion({nombre, compra, venta}) {
    console.log(nombre, compra, venta)
    return (
    <div className="cotizacion">
        <h3>{nombre}</h3>
        <p>Compra: {compra}</p>
        <p>Venta: {venta}</p>
    </div>
    )
}

export default Cotizacion