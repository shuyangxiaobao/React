import React from 'react';
import logo from './logo.svg';
import './App.css';
import TWO from '../src/Learn/002'
import THREE from './Learn/003状态机'
import FOUR from './Learn/004React Props'
import FIVE from './Learn/005React Propos'
import SIX from './Learn/006事件处理'
import SEVEN from './Learn/007React 条件渲染'
import EIGHT from './Learn/008React 条件渲染'
import NINE from './Learn/009React 条件渲染(三目 与 运算符)'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Date1 name={"xiaobao"} date={new Date()} />
      </header>
    </div>
  );
}


function Date1(props) {
  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h1>{props.date.toLocaleTimeString()}</h1>
      <Tick /> */}
      {/* <TWO /> */}
      {/* <THREE/> */}
      {/* <FOUR /> */}
      {/* <FIVE/> */}
      {/* <SIX/> */}
      {/* <SEVEN isLoggedIn={true}/>
      <SEVEN isLoggedIn={false}/> */}
      {/* <EIGHT/> */}
      <NINE/>

    </div>
  )
}
function Tick() {
  return (
    <div>
      <p>ppppppp</p>
    </div>
  );
}




export default App;