import React from 'react';

function FormattedDate(props) {
    return <h2>现在是 {props.date.toLocaleTimeString()}</h2>;
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}</h2>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }


    componentDidMount() {
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     5000
        // );
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}


class APP extends React.Component {
    render() {
        return (
            <div>
                <Clock />
                <Clock />
                <Clock />
            </div>
        );
    }
}

export default APP;