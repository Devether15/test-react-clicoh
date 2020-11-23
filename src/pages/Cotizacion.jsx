import React from 'react'
import './cotizacion.css'

function Cotizacion({nombre, compra, venta}) {
    // console.log(nombre, compra, venta)
    return (
    <div className="cotizacion container">
         <div>
            <h3 className="title">{nombre}</h3>
            <p className="subtitle1">Compra: {compra}</p>
            <p className="subtitle2">Venta: {venta}</p>
         </div>
    </div>
    )
}

export default Cotizacion