import React from 'react';

function HelloMessage(props) {
    return <h1>{props.name}</h1>;
}

HelloMessage.defaultProps = {
    name: "默认值",
}

function App() {
    return <div>
        <HelloMessage name="004 React Props Runoob" />
        <HelloMessage />
        <WebSite />

    </div>
}

class WebSite extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "菜鸟教程",
            site: "https://www.runoob.com"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        );
    }
}



//   class Name extends React.Component {
//     render() {
//       return (
//         <h1>{this.props.name}</h1>
//       );
//     }
//   }

function Name(props) {
    return <h1>{props.name}</h1>
}


class Link extends React.Component {
    render() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
}





export default App;