import React from 'react';
import {
    Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { directive } from '@babel/types';
const element = <h1>eeeeeee</h1>;
const width = document.querySelector('body').offsetWidth;
const height = document.querySelector('body').offsetHeight;


export default class Entrance extends React.Component {
    constructor(props) {
        super(props);
        this.oneClick = this.oneClick.bind(this);
    }

    oneClick() {
        // alert('1');
    }

    render() {
        var dic = {
            name: "hello",
            value: "world",
        }
        return (
            <div style={style1}>

                <Link to={{
                    pathname: "/apex",
                    state: { data: dic }
                }}><button style={buttonStyle}>APEX</button></Link>

                <button style={buttonStyle2}>hahah</button>
            </div>
        )
    }
}


var style1 = {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    width: width,
    height: 900,
    // backgroundColor: "",
    textAlign: "center",
}
var buttonStyle = {
    display: 'block',
    position: "absolute",
    top: 10,
    left: 50,
    right: 50,
    height: 60,
    borderRadius: 10
}

var buttonStyle2 = {
    display: 'block',
    position: "absolute",
    top: 80,
    left: 50,
    right: 50,
    height: 60,
    borderRadius: 10
}