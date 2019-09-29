import React from 'react';
var title = "菜鸟教程";


class MyTitle extends React.Component {

    render() {
       return <h1>Hello, {this.props.title}</h1>
    }
}
export default MyTitle;