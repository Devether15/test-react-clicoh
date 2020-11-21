  
import React, { useContext } from 'react'
import { ContextData } from '../context/DataContext';

function Header() {
    const {data}= useContext(ContextData)
    console.log(data)
    return (
       <div>
           <h1>Holas</h1>
       </div>
    )
}

export default Header