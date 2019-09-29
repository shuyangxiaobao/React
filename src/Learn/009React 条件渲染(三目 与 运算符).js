import React from 'react';

class APP extends React.Component {

    render() {
        var messages = ['3'];

        return (
            <div>
                <Message messages={messages} />


            </div>
        );
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>
                {
                    (this.props.messages.length > 0 && <h2>您有{this.props.messages.length}条未读消息</h2>)
                }
            隔开
                {this.props.messages.length > 0 ? <h2>您有{this.props.messages.length}条未读消息</h2> :
                    <h2>没有未读消息</h2>
                }
            </div>
        )

    }
}







export default APP;