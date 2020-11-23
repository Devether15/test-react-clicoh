import React, { useContext } from 'react'
import { ContextData } from '../context/DataContext';



function Climas() {
   const {climas}= useContext(ContextData) 
   console.log(climas);

//    const {name, clouds} = climas //NO FUNCIONÓ EL DESTRUCTURIN Y NO SÉ POR QUÉ
  
//    let clouds = climas.clouds.all
//    let name = climas.name

    return (
                       
            <div className="container">               
                    {/* { name && <h3 className="title">{name}</h3>}    
                    { clouds && <h3 className="title">{clouds}</h3>}             */}
            </div>
    )
}

export default Climas