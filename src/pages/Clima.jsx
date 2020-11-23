import React from 'react'
import './Clima.css'

function Clima({author, content,title,date,image}) {
    console.log(title)
    return (
        <div class="example-1 card">
            <div class="wrapper" style={{background: `url(${image}) center/cover no-repeat`}}>
                <div class="date">
                <span class="day">{date}</span>                    
                </div>
                <div class="data">
                    <div class="content">
                        <span class="author">{author}</span>
                        <h1 class="title"><a href="#">{title}</a></h1>
                        <p class="text">Olympic gold medals contain only about 1.34 percent gold, with the rest composed of sterling silver.</p>
                        <label for="show-menu" class="menu-button"><span></span></label>
                    </div>
                    <input type="checkbox" id="show-menu" />
                    <ul class="menu-content">
                    <li>
                        <a href="#" class="fa fa-bookmark-o"></a>
                    </li>
                    <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
                    <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Clima