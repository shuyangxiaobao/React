import React from 'react';
const width = document.querySelector('body').offsetWidth;
const height = document.querySelector('body').offsetHeight;
export default class MarketData extends React.Component {


    constructor(props) {
        super(props);
        this.jumpToData = this.jumpToData.bind(this);
        this.toPoint = this.toPoint.bind(this);

    }

    jumpToData() {
        alert('1111');

        // this.props.myroute.push
        // this.props.history.push
        this.props.myRoute.push({
            pathname:"/news",
            // state:{args:args}
        });
    }
    toPoint(percent) {
        var str = percent.replace("%", "");
        str = str / 100;
        if (str < 0){
            return false;
        }
        return true;
    }

    render() {
        const data = this.props.data;
        const styles = [require('../image/Collection-Click.png'), require('../image/Collection.png')]
        const colors = ["#25CC4D","#FC3E30"];
        return (
            <div>
                <div
                    style={{
                        width: width,
                        position: "relative",
                        height: 60,
                        // backgroundColor:"#ffff00",
                        textAlign: "start",
                    }}
                    onClick={this.jumpToData}
                >
                    <p
                        style={{
                            position: "absolute",
                            top: 20,
                            left: 15,
                            color: "#ffffff",
                            fontSize: 16,

                        }}>Market Data</p>
                    <img
                        style={{
                            position: "absolute",
                            top: 35,
                            right: 15,
                            width: 16,
                            height: 16,
                        }}
                        src={require('../image/more.png')}
                    />
                </div>

                <div>
                    {data.map((item, index) =>
                        <div key={item.title}
                            style={{
                                width: width,
                                height: 76,
                                backgroundColor: "#21212b",
                                position: "relative",
                            }}>
                            <div style={{
                                position: "absolute", top: 4, left: 15, right: 15,
                                bottom: 4, backgroundColor: "#282834", borderRadius: 8,
                            }}>
                                <label style={{ position: "absolute", top: 9, left: 20, fontSize: "14px", color: "#ffffff" }}>{item.title}</label>
                                <label style={{ position: "absolute", bottom: 9, left: 20, fontSize: 12, color: "#7E829D" }}>Vol:{item.volume}</label>
                                <label style={{ position: "absolute", bottom: 9, left: 91, fontSize: 12, color: "#7E829D" }}>OI:{item.openPositions}</label>
                                <label style={{ position: "absolute", top: 9, right: 68, fontSize: 12, color: "#ffffff" }}>{item.lastPrice}</label>
                                <div style={{
                                    position: "absolute", bottom: 9, right: "68px", fontSize: 12, lineHeight: "26px",
                                    color: "#ffffff", width: 56, height: 26, 
                                    backgroundColor: colors[this.toPoint(item.upDownPercent) ? 1 : 0], textAlign: "center", borderRadius: "4px"
                                }}>{item.upDownPercent}</div>
                                <img src={styles[(item.collectStatus) ? 1 : 0]} style={{
                                    position: "absolute", right: 20, top: 20, width: 28, height: 28
                                }} />


                            </div>

                        </div>)}

                </div>
            </div>)
    }
}


