import React from 'react'
import ReactDOM from 'react-dom'
import logoPic from '../assets/temp_vc.png'

const e = React.createElement;

function Logo() {
    return (
        <img src={logoPic} width="170">
        </img>
    )
}

export default Logo

const domContainer = document.querySelector('#brand-logo');
ReactDOM.render(e(Logo), domContainer);