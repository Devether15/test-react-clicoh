import React, { useContext } from 'react'
import { Fragment } from 'react'
import Slider from "react-slick";
import { sixItemsSettings } from '../settings/carouselsSettings';
import { ContextData } from '../context/DataContext';
import Cotizacion from './Cotizacion';


function Cotizaciones() {
   const {data}= useContext(ContextData)
   const {cotizaciones} = data
    // console.log(data.casas)
    return (
 <Fragment>    
    <div className="container">
        <Slider {...sixItemsSettings}>
            {cotizaciones && cotizaciones.map(cotizacion => {                              
                const {nombre, compra, venta} = cotizacion.casa;
                return <Cotizacion nombre={nombre} compra={compra} venta={venta}/>
            })}
        </Slider>
    </div>
</Fragment>
    )
}

export default Cotizaciones