import React, { useContext } from 'react'
import { Fragment } from 'react'
import Slider from "react-slick";
import { newsSettings } from '../settings/carouselsSettings';
import { ContextData } from '../context/DataContext';
import Clima from './Clima'



function Climas() {
   const {climas}= useContext(ContextData) 
//    console.log(climas);
//    const {}

//    const {name, clouds} = climas //NO FUNCIONÓ EL DESTRUCTURIN Y NO SÉ POR QUÉ
  
//    let clouds = climas.clouds.all
//    let name = climas.name

    return (
        <Fragment>    
            <div className="container-slider">
                <Slider {...newsSettings}>
                    {climas && climas.map(clima => {                              
                        const {author, content,title,publishedAt,urlToImage} = clima;
                        return <Clima author={author}  content={content} title={title} date={publishedAt} image={urlToImage} />
                    })}
                </Slider>
            </div>
        </Fragment>
    )
}

export default Climas