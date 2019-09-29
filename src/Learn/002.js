import React from 'react';


function App() {
    var i = 1;
    return (
        <div>
            <h1> oo2js:&nbsp;&nbsp;&nbsp;1+1 = {1 + 1}</h1>
            <h1>conditional (三元运算):{i == 1 ? 'True' : 'False'}</h1>
            <h1 style={mystyle}>css样式</h1>
            {arr}
            <HelloMessage />
            <Welcome />
            {element}
            <FUhe />
        </div>
    );
}

function HelloMessage(props) {
    return <h1>function函数定义组件</h1>;
}

class Welcome extends React.Component {
    render() {
        return <h1>ES6 class定义组件</h1>;
    }
}
const element = <h1>eeeeeeeeeee</h1>;

var arr = [
    <h1>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
var mystyle = {
    fontSize: 40,
    color: "#ffff00",
}



function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function FUhe() {
    return (
        <div>
            复合组件
        <Name name="菜鸟教程" />
            <Url url="http://www.runoob.com" />
            <Nickname nickname="Runoob" />
        </div>
    );
}



export default App;