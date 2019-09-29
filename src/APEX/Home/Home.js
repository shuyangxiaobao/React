import React from 'react';
import imgURL from '../image/home1.png';
import ReactSwiper from 'reactjs-swiper';
import '../css/home.css';
import Carousel from './lunbo';
import MarketData from './marketData'
import NEWS from './news'

// const width = document.querySelector('body').offsetWidth;
const width = window.screen.width; //
const height = window.screen.height; //
const images = ['../image/banner.png', '../image/banner.png']

export default class Entrance extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 1,selectIndex:0 };
        this.leftClick = this.leftClick.bind(this);
        this.adverScroll = this.adverScroll.bind(this);
        this.bottomtabbarClick = this.bottomtabbarClick.bind(this);





        
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        // alert(this.state.index);
        var index = this.state.index;
        if (index >= 2) {
            index = -1;
        }
        this.setState({
            index: index + 1
        });
    }


    leftClick() {
        alert('1');
    }
    adverScroll(event) {
        //    var obj =  document.getElementById('xiaobao');
        console.log(event.target.scrollLeft);
        var index = (event.target.scrollLeft + width / 2) / width;
        this.setState({
            offsetX: index * width - event.target.scrollLeft
        })


        // alert('12');
        // console.log(event.transform);
        // console.log(document.documentElement.scrollTop);
        // let offsetTop  = React.findDOMNode(this.props._instances[0].refs.header).offsetTop;
        // console.log(offsetTop);
        // this.setState({
        //     offsetX:-375*2
        // })
    }

    bottomtabbarClick(index){
        this.setState({
            selectIndex:index
        })
    }


    render() {
        // alert(height);
        var datas = [{
            title: "FO1908", volume: 30, openPositions: 88,
            lastPrice: 518.50, upDownPercent: "-1.2%", collectStatus: false
        },
        {
            title: "CPF1907", volume: 30, openPositions: 88,
            lastPrice: 518.50, upDownPercent: "-1.2%", collectStatus: true
        },
        {
            title: "PF1907", volume: 30, openPositions: 88,
            lastPrice: 518.50, upDownPercent: "1.2%", collectStatus: true
        },
        {
            title: "UC1905W5", volume: 30, openPositions: 88,
            lastPrice: 518.50, upDownPercent: "-1.2%", collectStatus: false
        },

        ];
        var adverStyle = {
            position: "relative",
            padding: 0,
            height: 160,
            width: width,
            top: 10,
            borderRadius: 10,
            borderWidth: 5,
            borderColor: "#ff0000",
            overflow: "scroll",
            backgroundColor: '#888809',
            // transformX: this.state.index * width,
            // scrollLeft: this.state.index * width,
        };
        var contentStyle = {
            width: 3 * width,
            // position: "absolute",
            height: 160,
            left: 0,
            top: 0,
            overflow: "hidden",
            overflowx: "hidden",



            // overflow:"hidden",
        }

        var image1Style = {
            position: "absolute",
            left: 0,
            width: width,
            height: 160
        }
        var image2Style = {
            position: "absolute",
            left: width,
            width: width,

            height: 160


        }
        var image3Style = {
            position: "absolute",
            left: width * 2,
            width: width,
            height: 160
        }
        return (
            <div style={{
                position: "relative",
                // top:0,
                // bottom:0,
                // left:0,
                // right:0,
                height:height-49,
                // overflow:"hidden",


                width: width,
                // height: height,
            }}>
                <div style={style1}>

                    <div style={topViewStyle}>
                        <img src={require('../image/menu.png')} style={menuStyle} onClick={this.leftClick} />
                        <p style={homeTitleStyle}>home</p>
                        <img src={require('../image/Message.png')} style={messageStyle} />
                    </div>

                    <div style={adverStyle} onScroll={this.adverScroll} id="xiaobao">
                        <div style={{
                            position: "relative",
                            width: width,
                            height: 160
                        }}>
                            <div style={contentStyle} id="xiaobao2">
                                <img src={"http://img2.imgtn.bdimg.com/it/u=3481390988,1388355334&fm=26&gp=0.jpg"} style={image1Style} />
                                <img src={"http://img2.imgtn.bdimg.com/it/u=3481390988,1388355334&fm=26&gp=0.jpg"} style={image2Style} />
                                <img src={require('../image/banner.png')} style={image3Style} />
                            </div>
                        </div>
                    </div>
                    <MarketData data={datas} />
                    <NEWS data={datas} />




                </div>          
          
            </div>

        )
    }
}


const ReactSwiperExample = () => {
    const items = [{
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569561553151&di=60e49020d41c78059e64b12d49c2fb10&imgtype=jpg&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180730%2F8c2dddc243fd4befb256bf64c53b0f78.jpeg',
        title: '图片1',
        link: 'http://baidu.com'
    },
    {
        image: 'http://img2.imgtn.bdimg.com/it/u=3481390988,1388355334&fm=26&gp=0.jpg',
        title: '图片1',
        link: 'http://taobao.com'
    },
    {
        image: 'http://ns.sinaimg.cn/translate/705/w900h605/20181013/7MLn-hmhafir2498780.jpg',
        title: '图片1',
        link: 'http://jd.com'
    }];

    const swiperOptions = {
        preloadImages: true,
        autoplay: 200,
        showPagination: false,
        autoplayDisableOnInteraction: false

    };
    return (
        <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
            className="swiperContainer" style={reactSwiperStyle} />
    );
};





var style1 = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom:49,
    width: width,
    height: height - 49,
    backgroundColor: "#21212b",
    textAlign: "center",
    overflow: "scroll",
}
var imageOneStyle = {

}

var topViewStyle = {
    // position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#21212B',
    // flexDirection: "row",
    // justifyContent: "space-around",
}

var menuStyle = {
    position: "absolute",
    left: 15,
    top: 34,
    width: 24,
    height: 24,
}

var homeTitleStyle = {
    height: 64,
    paddingTop: 10,
    color: "#ffffff",
    fontSize: 25,
    textAlign: "cneter",
}

var messageStyle = {
    position: "absolute",
    right: 15,
    top: 34,
    width: 24,
    height: 24,
}


var reactSwiperStyle = {
    height: 160,
    width: width / 2,
    backgroundColor: "#ffff00",
    padding: 10

}