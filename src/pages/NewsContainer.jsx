import React, { useContext } from 'react'
import { Fragment } from 'react'
import Slider from "react-slick";
import { newsSettings } from '../settings/carouselsSettings';
import { ContextData } from '../context/DataContext';
import News from './News'

function NewsContainer() {
   const {news}= useContext(ContextData) 
   console.log(news);
//    const {}

//    const {name, clouds} = news //NO FUNCIONÓ EL DESTRUCTURIN Y NO SÉ POR QUÉ
  
//    let clouds = news.clouds.all
//    let name = news.name

    return (
        <Fragment>    
            <div className="container-slider">
                <Slider {...newsSettings}>
                    {news && news.map(item => {                              
                        const {author, content,title,publishedAt,urlToImage} = item;
                        return <News author={author}  content={content} title={title} date={publishedAt} image={urlToImage} />
                    })}
                </Slider>
            </div>
        </Fragment>
    )
}

export default NewsContainer