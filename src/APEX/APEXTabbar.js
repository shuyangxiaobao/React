import React from 'react';
import Home from './Home/Home'
import Data from "./Data/APEXData"
import NEWS from './NEWS/APEXnews'
import Me from "./Me/APEXMe"

const width = window.screen.width; //
const height = window.screen.height; //
var tabbarDatas = [{ title: "Home", icon: require("./image/tabbar/home.png"), selectIcon: require("./image/tabbar/homeClick.png") },
{ title: "Data", icon: require("./image/tabbar/data.png"), selectIcon: require("./image/tabbar/dataClick.png") },
{ title: "News", icon: require("./image/tabbar/news.png"), selectIcon: require("./image/tabbar/newsClick.png") },
{ title: "me", icon: require("./image/tabbar/products.png"), selectIcon: require("./image/tabbar/productsClick.png") },
]

export default class APEXTabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 1, selectIndex: 0 ,isTest:true};
        this.selectpage = this.selectpage.bind(this);
        
    }

    bottomtabbarClick(index) {
        
        this.setState({
            selectIndex: index
        })
    }

    selectpage() {

        switch (this.state.selectIndex) {
            case 0:
                {
                    return <Home myRoute={this.props.history}/>;
                }
                break;
            case 1:
                {
                    return <Data myRoute={this.props.history} isTest={this.state.isTest}/>;
                }
                break;
            case 2:
                {
                    return <NEWS myRoute={this.props.history}/>;

                }
                break;
            case 3:
                {
                    return <Me myRoute={this.props.history} isTest={this.state.isTest}/>;

                }
                break;

            default:
                break;
        }
    }

    // normalimages=[require('./image/tabbar/homeClick.png'),]

    // require('./image/tabbar/homeClick.png')
    // require('./image/tabbar/home.png')





    render() {

        // var tabbarImage = [require({tabbarDatas[]})]
        return (
            <div style={{ color: "#ff00ff", position: "relative", width: width, height: height }}>
                {this.selectpage()}
                <div style={{ backgroundColor: "#282834", position: "absolute", bottom: 0, left: 0, right: 0, height: 49 }}>
                    {tabbarDatas.map((item, index) =>
                        <div key={item.title}
                            style={{
                                display: "inline-block",
                                width: width / 4,
                                height: 49,
                                textAlign: "center",
                                backgroundColor:"#282834"
                            }}
                            onClick={() => { this.bottomtabbarClick(index) }}
                        >
                            <img src={index == this.state.selectIndex ? tabbarDatas[index].selectIcon : tabbarDatas[index].icon}
                                style={{ width: 20, height: 20, paddingTop:4 }}
                            />
                            <div
                                style={{
                                    display: "inline-block",
                                    width: width / 4,
                                    fontSize:11,
                                    paddingTop:"0px",
                                    // paddingBottom:"4px",
                                    height: "21px",
                                    lineHeight:"21px",
                                    // backgroundColor:"#798345",
                                    color: this.state.selectIndex == index ? "#387CFE" : "#CDD5DF",
                                    textAlign: "center",

                                }}
                            >{item.title}</div>

                        </div>
                    )}
                </div>

            </div>


        );
    }
}



// npm install react-animate-on-scroll --save

