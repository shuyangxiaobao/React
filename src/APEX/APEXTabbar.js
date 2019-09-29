import React from 'react';
import Home from './Home/Home'
const width = window.screen.width; //
const height = window.screen.height; //
export default class APEXTabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 1, selectIndex: 0 };

    }

    bottomtabbarClick(index) {
        this.setState({
            selectIndex: index
        })
    }




    render() {
        return (
            <div style={{ color: "#ff0000", position: "relative", width: width, height: height }}>
                <Home />
                <div style={{ backgroundColor: "#678fff", position: "absolute", bottom: 0, left: 0, right: 0, height: 49 }}>
                    <div style={{
                        backgroundColor: this.state.selectIndex == 0 ? "#387CFE" : "#CDD5DF",
                        display: "inline-block",
                        width: width / 2,
                        height: 49
                    }}
                        onClick={() => { this.bottomtabbarClick(0) }}
                    >0000</div>

                    <div style={{
                        backgroundColor: this.state.selectIndex == 0 ? "#387CFE" : "#CDD5DF",
                        display: "inline-block",
                        width: width / 2,
                        height: 49
                    }}
                        onClick={() => { this.bottomtabbarClick(1) }}
                    >1111</div>
                </div>

            </div>


        );
    }
}


