import React from 'react';
const width = document.querySelector('body').offsetWidth;
const height = document.querySelector('body').offsetHeight;
export default class NEWS extends React.Component {


    constructor(props) {
        super(props);
        this.state =
            {
                base_url: "http://mapp.asiapacificex.com/mobile/data/query?businessType=2&pageNum=1&pageSize=10",
                "baseIP": "http://mapp.asiapacificex.com",
                datas: [],
            };
        this.jumpToData = this.jumpToData.bind(this);
        this.toPoint = this.toPoint.bind(this);
        this.functiontimetrans = this.functiontimetrans.bind(this);
        this.cellClick = this.cellClick.bind(this);
    }

    jumpToData() {
        alert('jumpToData3');
    }
    toPoint(percent) {
        var str = percent.replace("%", "");
        str = str / 100;
        if (str < 0) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        console.log('2345678987654323456789');
        this.loadData();
    }

    loadData() {
        fetch(this.state.base_url).then
            ((response) => response.json())
            .then((responseJson) => {
                //拿到数据
                console.log('😄😄😄😄😄' + responseJson.toString());
                var jsonData = [];
                for (let index = 1; index < responseJson.result.result.length; index++) {
                    const element = responseJson.result.result[index];
                    jsonData.push(element);

                }
                //更新数据                
                this.setState({
                    datas: jsonData
                })
            })
    }

    // 时间戳转化为时间
    functiontimetrans(date) {
        var date = new Date(date);//如果date为13位不需要乘1000

        var Y = date.getFullYear() + '-';

        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';

        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';

        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';

        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

        return Y + M + D + h + m + s;
    }

    cellClick = (index,item) => {
        this.props.myRoute.push({
            pathname:"/newsdetail",
            params:{url:this.state.baseIP+item.htmlFive+"?id="+item.id,myRoute:this.props.myRoute}
        });
    }



    render() {
        var titleStyle = {
            color: "#FFFFFF",
            numberOfLines: 1,
            position: "absolute",
            top: 19,
            left: 15,
            right: 15,
            textAlign: "left",
            height: 48,
            overflow: "hidden",
            lineHeight: "24px",
            fontSize: "14px",
        };

        var timeStyle = {
            color: "#7E829D",
            fontSize: "11px",
            position: "absolute",
            top: 76,
            left: 15,
        }
        var browseNumStyle = {
            color: "#7E829D",
            fontSize: "11px",
            position: "absolute",
            top: 76,
            left: 170,
        }
        var lineStyle = {
            position: "absolute",
            bottom: 1,
            left: 15,
            right: 15,
            height: 1,
            backgroundColor: "#191A22"
        }


        const data = this.state.datas;
        const styles = [require('../image/Collection-Click.png'), require('../image/Collection.png')]
        const colors = ["#25CC4D", "#FC3E30"];
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
                        src={require('../image/more copy.png')}
                    />
                </div>

                <div>
                    {data.map((item, index) =>
                        <div key={item.title}
                            style={{
                                width: width,
                                height: 116,
                                backgroundColor: "#21212b",
                                position: "relative",
                            }}
                            onClick={() => this.cellClick(index,item)}
                        >
                            <label style={titleStyle}>{item.title}</label>
                            <label style={timeStyle}>{this.functiontimetrans(item.createDate)}</label>
                            <label style={browseNumStyle}>  {item.browseNum}浏览</label>
                            <div style={lineStyle}></div>


                        </div>)}

                </div>
            </div>)
    }
}
