import React from 'react';
import {Link} from "react-router-dom";

export default class NoPage extends React.Component{
    render(){
        return (
            <div>
                <p>404</p>
                <p>404</p>
                <p>啥也没有，点下面的按钮走吧</p>

                <Link to="/home">
                    <button style={{background:"pink",color:"blue"}}>拜拜</button>
                </Link>
            </div>
        )
    }
}