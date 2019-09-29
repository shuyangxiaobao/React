import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const element = <h1>eeeeeee</h1>;

// ReactDOM.render(<App />, document.getElementById('root'));


// demo1
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//demo2
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
// setInterval(tick, 1000);


//demo3
// function Date1(props){
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.date.toLocaleTimeString()}</h1>

//         </div>
//     )
// }
// function tick(){
//     ReactDOM.render(
//         <Date1 name={"xiaobao"} date={new Date()}/>,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);

// //demo4
// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
// class MyDate extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Clock date={new Date()} />
//                 <h1>{this.props.name}</h1>
//                 {element}
//             </div>
//         );
//     }
// }
// function tick() {
//     ReactDOM.render(
//         <div>
//             <MyDate name={"12345"} />
//             <p hahha="hahah">ppppppppp</p>
//             <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>

//         </div>
//         ,

//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);



// ReactDOM.render(
//     <h1>001 js</h1>,
//     document.getElementById('root')
//   );

