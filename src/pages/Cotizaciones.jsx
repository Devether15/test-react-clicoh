import React, { useContext } from 'react'
import { Fragment } from 'react'
import Slider from "react-slick";
import { oneSettings } from '../settings/carouselsSettings';
import { ContextData } from '../context/DataContext';
import Cotizacion from './Cotizacion';


function Cotizaciones() {
   const {cotizaciones}= useContext(ContextData)  
    // console.log(data.casas)
    return (
 <Fragment>    
    <div className="container-slider">
        <Slider {...oneSettings}>
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